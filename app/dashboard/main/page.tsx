import { WidgetGrid } from "@/components";

export default function MainPage() {
    return (
        <div className="flex flex-col">
            <h2 className="text-3xl mt-4 mb-6 w-full text-center font-bold" >Dashboard</h2>
            <WidgetGrid />
        </div>
    );
}
