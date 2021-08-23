import { assets as OnboardingAssets } from "./Onboarding";
import { assets as WelcomeAssets } from "./Welcome";

export { default as Onboarding } from "./Onboarding";
export { default as Welcome } from "./Welcome";
export { default as Login } from "./Login";
export const assets = [...OnboardingAssets, ...WelcomeAssets];
