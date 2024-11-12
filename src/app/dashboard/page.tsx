"use client";

import { useState } from "react";
import {
  BarChart3,
  Leaf,
  Package,
  ShoppingCart,
  DollarSign,
  FileText,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const navItems = [
  { icon: BarChart3, label: "Dashboard", href: "/dashboard" },
  { icon: Leaf, label: "Gestão de Plantações", href: "/plantacoes" },
  { icon: ShoppingCart, label: "Gestão de Colheita", href: "/colheita" },
  { icon: Package, label: "Controle de Estoque", href: "/estoque" },
  { icon: DollarSign, label: "Gestão Financeira", href: "/financeiro" },
  { icon: FileText, label: "Relatórios", href: "/relatorios" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-green-800 text-white w-64 ${
          sidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold">GreenTrack</h1>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <nav className="space-y-2 p-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-green-700"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </ScrollArea>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow">
          <div className="flex items-center justify-between px-4 py-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <Button variant="outline">Sair</Button>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
