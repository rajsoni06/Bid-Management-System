
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, FileText, Users, Clock, TrendingUp, Database } from 'lucide-react';

export const DashboardOverview = () => {
  const stats = [
    {
      title: 'Total Emails Archived',
      value: '12,847',
      change: '+24%',
      changeType: 'positive',
      icon: Mail,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Attachments Stored',
      value: '3,421',
      change: '+18%',
      changeType: 'positive',
      icon: FileText,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Active Threads',
      value: '1,856',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Storage Used',
      value: '47.2 GB',
      change: '+8%',
      changeType: 'positive',
      icon: Database,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const recentActivity = [
    { type: 'email', content: 'New email from supplier@acme.com archived', time: '2 minutes ago' },
    { type: 'attachment', content: 'PDF attachment uploaded to Drive', time: '5 minutes ago' },
    { type: 'thread', content: 'Email thread "Project Proposal" updated', time: '12 minutes ago' },
    { type: 'oauth', content: 'OAuth token refreshed successfully', time: '1 hour ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-white/20 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.gradient} shadow-lg`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline space-x-2">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                  </div>
                </div>
              </CardContent>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </Card>
          );
        })}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Email Volume Chart */}
        <Card className="lg:col-span-2 bg-white/80 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span>Email Volume Trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600">Chart visualization will be implemented</p>
                <p className="text-sm text-gray-500">with Recharts integration</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white/80 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 line-clamp-2">{activity.content}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card className="bg-white/80 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-500" />
            <span>System Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <p className="font-medium text-gray-900">Gmail API</p>
                <p className="text-sm text-gray-500">Connected & Active</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <p className="font-medium text-gray-900">Google Drive</p>
                <p className="text-sm text-gray-500">Syncing Attachments</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <p className="font-medium text-gray-900">Database</p>
                <p className="text-sm text-gray-500">All Services Running</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
