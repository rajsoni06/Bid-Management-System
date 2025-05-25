
import { useState } from 'react';
import { DashboardOverview } from '@/components/DashboardOverview';
import { EmailArchive } from '@/components/EmailArchive';
import { AttachmentManager } from '@/components/AttachmentManager';
import { OAuthStatus } from '@/components/OAuthStatus';
import { Navigation } from '@/components/Navigation';
import { Mail, FileText, Settings, BarChart3 } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'emails':
        return <EmailArchive />;
      case 'attachments':
        return <AttachmentManager />;
      case 'oauth':
        return <OAuthStatus />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="flex">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        {/* Main Content */}
        <div className="flex-1 lg:ml-64">
          <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 px-6 py-4 sticky top-0 z-40">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Email Archive System
                </h1>
                <p className="text-gray-600 text-sm mt-1">
                  G-Suite integration for automated email archiving
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">System Active</span>
              </div>
            </div>
          </header>

          <main className="p-6">
            <div className="animate-fade-in">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
