import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import {
    setPersistence,
    browserLocalPersistence,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    updateProfile
} from "firebase/auth";

export default function SignupLoginCard({ onClose }) {
    const [isSignup, setIsSignup] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState(""); // New username state
    const [error, setError] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSocialLogin = async (provider) => {
        try {
            setIsProcessing(true);
            await signInWithPopup(auth, provider);
            onClose();
        } catch (error) {
            setError(error.message);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);
        try {
            // Set persistence to LOCAL
            await setPersistence(auth, browserLocalPersistence);

            if (isSignup) {
                // Create user with email and password
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                // Update user profile with username
                await updateProfile(userCredential.user, {
                    displayName: username
                });
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            onClose();
        } catch (error) {
            setError(error.message);
        } finally {
            setIsProcessing(false);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User is logged in:", user);
            } else {
                console.log("User is logged out");
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="fixed top-20 right-5 bg-white p-8 rounded-2xl shadow-2xl z-50 w-96 border border-gray-100 transform transition-all duration-300 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-1">
                        {isSignup ? "Create Account" : "Welcome Back"}
                    </h2>
                    <p className="text-gray-500 text-sm">
                        {isSignup ? "Join our community" : "Sign in to continue"}
                    </p>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Username Field (Only for Signup) */}
                {isSignup && (
                    <div className="relative">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all peer"
                            placeholder=" "
                            required
                        />
                        <label className={`absolute left-4 px-1 text-gray-500 bg-white transition-all duration-200 pointer-events-none
                            ${username ? '-top-2 text-sm text-blue-600' : 'top-3 text-base'}
                            peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600`}>
                            Username
                        </label>
                    </div>
                )}

                {/* Email Field */}
                <div className="relative">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all peer"
                        placeholder=" "
                        required
                        autoComplete="email"
                    />
                    <label className={`absolute left-4 px-1 text-gray-500 bg-white transition-all duration-200 pointer-events-none
                        ${email ? '-top-2 text-sm text-blue-600' : 'top-3 text-base'}
                        peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600`}>
                        Email Address
                    </label>
                    <svg className="w-5 h-5 absolute right-3 top-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                </div>

                {/* Password Field */}
                <div className="relative">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all peer"
                        placeholder=" "
                        required
                        autoComplete={isSignup ? "new-password" : "current-password"}
                    />
                    <label className={`absolute left-4 px-1 text-gray-500 bg-white transition-all duration-200 pointer-events-none
                        ${password ? '-top-2 text-sm text-blue-600' : 'top-3 text-base'}
                        peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600`}>
                        Password
                    </label>
                    <svg className="w-5 h-5 absolute right-3 top-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="flex items-center p-3 bg-red-50 rounded-lg text-red-700 text-sm">
                        <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {error}
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg 
                           hover:from-blue-600 hover:to-blue-700 transition-all font-semibold shadow-lg
                           hover:shadow-md active:scale-98 flex items-center justify-center"
                >
                    {isProcessing ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : isSignup ? (
                        "Create Account"
                    ) : (
                        "Sign In"
                    )}
                </button>

                {/* Social Login Buttons */}
                <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-5">
                    <button
                        type="button"
                        onClick={() => handleSocialLogin(new GoogleAuthProvider())}
                        disabled={isProcessing}
                        className="flex items-center justify-center py-2.5 border border-gray-200 rounded-lg 
                               hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
                        aria-label="Sign in with Google"
                    >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                        </svg>
                        Google
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSocialLogin(new GithubAuthProvider())}
                        disabled={isProcessing}
                        className="flex items-center justify-center py-2.5 border border-gray-200 rounded-lg 
                               hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
                        aria-label="Sign in with GitHub"
                    >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="#333"/>
                        </svg>
                        GitHub
                    </button>
                </div>
            </form>

            {/* Toggle between Signup and Login */}
            <div className="mt-6 text-center text-sm text-gray-500">
                {isSignup ? "Already have an account? " : "Don't have an account? "}
                <button
                    onClick={() => setIsSignup(!isSignup)}
                    className="text-blue-600 font-semibold hover:text-blue-700 underline underline-offset-2 transition-colors"
                >
                    {isSignup ? "Sign In" : "Create Account"}
                </button>
            </div>
        </div>
    );
}