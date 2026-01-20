"use client";

import { User, Bell, Shield, CircleHelp, LogOut, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { useRouter } from "next/navigation";

// Mock user data
const USER = {
    name: "Alex Doe",
    email: "alex.doe@example.com",
    avatar: null
};

export default function SettingsPage() {
    const router = useRouter();

    const settingSections = [
        {
            title: "Account",
            items: [
                { icon: User, label: "Edit Profile" },
                { icon: Bell, label: "Notifications" },
                { icon: Shield, label: "Privacy & Security" }
            ]
        },
        {
            title: "Support",
            items: [
                { icon: CircleHelp, label: "Help & Support" },
                { icon: null, label: "Terms & Conditions" } // No icon for simple links example
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50 pb-32">
            {/* Header / Profile Card */}
            <div className="bg-white px-5 pt-12 pb-8 shadow-sm">
                <h1 className="mb-6 text-3xl font-bold text-gray-900">Settings</h1>

                <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                        {USER.name.charAt(0)}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">{USER.name}</h2>
                        <p className="text-sm text-gray-500">{USER.email}</p>
                    </div>
                </div>
            </div>

            <div className="px-5 pt-6">
                {settingSections.map((section) => (
                    <div key={section.title} className="mb-6">
                        <h3 className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wider pl-1">
                            {section.title}
                        </h3>
                        <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100">
                            {section.items.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.label}
                                        className={`flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-50 ${idx !== section.items.length - 1 ? "border-b border-gray-100" : ""
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            {Icon && <Icon className="text-gray-400" size={20} />}
                                            <span className="font-medium text-gray-900">{item.label}</span>
                                        </div>
                                        <ChevronRight className="text-gray-300" size={18} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}

                <button
                    onClick={() => router.push("/")}
                    className="flex w-full items-center gap-3 rounded-2xl bg-white p-4 text-left text-red-500 shadow-sm border border-gray-100 hover:bg-red-50 transition-colors mt-2"
                >
                    <LogOut size={20} />
                    <span className="font-medium">Log Out</span>
                </button>

                <p className="mt-8 text-center text-xs text-gray-400">
                    App Version 1.0.0
                </p>
            </div>
        </main>
    );
}
