
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, AlertCircle, Clock, RefreshCw, Settings } from 'lucide-react';

export const OAuthStatus = () => {
  const oAuthServices = [
    {
      name: 'Gmail API',
      status: 'connected',
      lastRefresh: '2024-01-15T10:30:00Z',
      expiresIn: '1 hour 23 minutes',
      scopes: ['https://www.googleapis.com/auth/gmail.readonly', 'https://www.googleapis.com/auth/gmail.metadata'],
      tokenHealth: 'healthy'
    },
    {
      name: 'Google Drive API',
      status: 'connected',
      lastRefresh: '2024-01-15T10:30:00Z',
      expiresIn: '1 hour 23 minutes',
      scopes: ['https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/drive.metadata'],
      tokenHealth: 'healthy'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return CheckCircle;
      case 'warning':
        return AlertCircle;
      case 'error':
        return AlertCircle;
      default:
        return Clock;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'error':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* OAuth Overview */}
      <Card className="bg-white/80 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-500" />
            <span>OAuth Integration Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">All Systems Connected</h3>
              <p className="text-sm text-gray-600">OAuth authentication active</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Auto-Refresh Enabled</h3>
              <p className="text-sm text-gray-600">Tokens refresh automatically</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Secure Configuration</h3>
              <p className="text-sm text-gray-600">Encrypted token storage</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Service Details */}
      <div className="space-y-4">
        {oAuthServices.map((service) => {
          const StatusIcon = getStatusIcon(service.status);
          return (
            <Card key={service.name} className="bg-white/80 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      <StatusIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <Badge className={getStatusColor(service.status)}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="bg-white/50 border-white/20">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh Token
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Token Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Last Refresh:</span>
                        <span className="text-gray-900">{formatTime(service.lastRefresh)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expires In:</span>
                        <span className="text-gray-900">{service.expiresIn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Token Health:</span>
                        <span className="text-green-600 capitalize">{service.tokenHealth}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Granted Scopes</h4>
                    <div className="space-y-1">
                      {service.scopes.map((scope, index) => (
                        <div key={index} className="text-xs bg-gray-100 rounded px-2 py-1 text-gray-700">
                          {scope.replace('https://www.googleapis.com/auth/', '')}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Configuration Actions */}
      <Card className="bg-white/80 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-purple-500" />
            <span>Configuration Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="bg-white/50 border-white/20 h-auto p-4 flex flex-col items-start space-y-2">
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-4 h-4" />
                <span className="font-medium">Refresh All Tokens</span>
              </div>
              <span className="text-sm text-gray-600 text-left">Manually refresh all OAuth tokens</span>
            </Button>
            
            <Button variant="outline" className="bg-white/50 border-white/20 h-auto p-4 flex flex-col items-start space-y-2">
              <div className="flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span className="font-medium">Update Scopes</span>
              </div>
              <span className="text-sm text-gray-600 text-left">Modify API access permissions</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
