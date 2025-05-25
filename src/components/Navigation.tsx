
import { Mail, FileText, Settings, BarChart3, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'emails', label: 'Email Archive', icon: Mail },
    { id: 'attachments', label: 'Attachments', icon: FileText },
    { id: 'oauth', label: 'OAuth Status', icon: Shield },
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white/90 backdrop-blur-sm border-r border-white/20 z-50 lg:block hidden">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">BidManager</h2>
            <p className="text-xs text-gray-500">Archive System</p>
          </div>
        </div>

        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                    activeTab === item.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <Icon className={cn(
                    "w-5 h-5 transition-transform duration-200",
                    activeTab === item.id ? "text-white" : "text-gray-500 group-hover:text-gray-700"
                  )} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
