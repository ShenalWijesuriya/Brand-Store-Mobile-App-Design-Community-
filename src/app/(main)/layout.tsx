import { BottomNav } from "@/components/ui/BottomNav";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-gray-50 pb-20">
            {children}
            <BottomNav />
        </div>
    );
}
