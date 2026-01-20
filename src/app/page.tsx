import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function OnboardingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero Section with Rounded Bottom */}
      <div className="relative h-[60vh] w-full overflow-hidden rounded-b-[2.5rem] bg-gray-100">
        <Image
          src="/images/onboarding-hero.png"
          alt="Fashion Model"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col items-center px-6 pt-8 pb-8 text-center">
        <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
          Find The <br />
          Best Collections
        </h1>

        <p className="mb-8 max-w-xs text-sm text-gray-500">
          Get your dream item easily with FashionHub and get other interesting offer
        </p>

        <div className="mt-auto flex w-full flex-row gap-4">
          <Button href="/explore" variant="outline" fullWidth className="flex-1 rounded-full border-gray-300 font-semibold text-gray-900 hover:bg-gray-50">
            Sign Up
          </Button>
          <Button href="/explore" variant="primary" fullWidth className="flex-1 rounded-full font-semibold shadow-xl shadow-orange-500/30">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
