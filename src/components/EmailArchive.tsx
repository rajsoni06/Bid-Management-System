
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Mail, Paperclip, User, Calendar, MoreVertical } from 'lucide-react';

export const EmailArchive = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockEmails = [
    {
      id: 1,
      subject: 'Project Proposal - Construction Bid',
      sender: 'john.contractor@buildtech.com',
      recipients: ['bids@company.com', 'manager@company.com'],
      timestamp: '2024-01-15T10:30:00Z',
      hasAttachments: true,
      threadCount: 3,
      preview: 'Dear Team, Please find attached our comprehensive proposal for the downtown construction project...',
      status: 'read',
      priority: 'high'
    },
    {
      id: 2,
      subject: 'Re: Equipment Rental Quote Request',
      sender: 'quotes@equipmentrental.com',
      recipients: ['procurement@company.com'],
      timestamp: '2024-01-15T09:15:00Z',
      hasAttachments: true,
      threadCount: 5,
      preview: 'Thank you for your inquiry regarding heavy machinery rental. We are pleased to provide our competitive rates...',
      status: 'unread',
      priority: 'medium'
    },
    {
      id: 3,
      subject: 'Supplier Certification Documents',
      sender: 'legal@supplierco.com',
      recipients: ['compliance@company.com', 'legal@company.com'],
      timestamp: '2024-01-14T16:45:00Z',
      hasAttachments: true,
      threadCount: 1,
      preview: 'Please find our updated certification documents and compliance reports as requested...',
      status: 'read',
      priority: 'low'
    }
  ];

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="bg-white/80 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-blue-500" />
            <span>Email Archive</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search emails by subject, sender, or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/50 border-white/20"
              />
            </div>
            <Button variant="outline" className="flex items-center space-x-2 bg-white/50 border-white/20">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Email List */}
      <div className="space-y-4">
        {mockEmails.map((email) => (
          <Card key={email.id} className={`bg-white/80 backdrop-blur-sm border-white/20 hover:shadow-lg transition-all duration-300 cursor-pointer ${email.status === 'unread' ? 'border-blue-200 bg-blue-50/50' : ''}`}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${email.status === 'unread' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                      <h3 className={`font-semibold text-gray-900 truncate ${email.status === 'unread' ? 'font-bold' : ''}`}>
                        {email.subject}
                      </h3>
                      <Badge className={getPriorityColor(email.priority)}>
                        {email.priority}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="flex-shrink-0">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span className="truncate">{email.sender}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatTime(email.timestamp)}</span>
                    </div>
                    {email.hasAttachments && (
                      <div className="flex items-center space-x-1">
                        <Paperclip className="w-4 h-4" />
                        <span>Attachments</span>
                      </div>
                    )}
                    {email.threadCount > 1 && (
                      <Badge variant="secondary" className="text-xs">
                        {email.threadCount} messages
                      </Badge>
                    )}
                  </div>

                  <p className="text-gray-700 text-sm line-clamp-2 mb-3">
                    {email.preview}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <div className="text-xs text-gray-500">
                      To: {email.recipients.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="bg-white/50 border-white/20 hover:bg-white/80">
          Load More Emails
        </Button>
      </div>
    </div>
  );
};
