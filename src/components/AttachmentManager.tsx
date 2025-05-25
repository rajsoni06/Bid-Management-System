
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, ExternalLink, Image, Archive, File } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export const AttachmentManager = () => {
  const { toast } = useToast();
  const [downloadingFiles, setDownloadingFiles] = useState<Set<number>>(new Set());

  const mockAttachments = [
    {
      id: 1,
      name: 'Construction_Proposal_2024.pdf',
      type: 'pdf',
      size: '2.4 MB',
      driveLink: 'https://drive.google.com/file/d/1234567890/view',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1234567890',
      emailSubject: 'Project Proposal - Construction Bid',
      uploadDate: '2024-01-15T10:30:00Z',
      downloadCount: 5
    },
    {
      id: 2,
      name: 'Equipment_Rental_Rates.xlsx',
      type: 'spreadsheet',
      size: '1.2 MB',
      driveLink: 'https://drive.google.com/file/d/0987654321/view',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=0987654321',
      emailSubject: 'Equipment Rental Quote Request',
      uploadDate: '2024-01-15T09:15:00Z',
      downloadCount: 3
    },
    {
      id: 3,
      name: 'Site_Photos_January.zip',
      type: 'archive',
      size: '15.7 MB',
      driveLink: 'https://drive.google.com/file/d/1122334455/view',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1122334455',
      emailSubject: 'Weekly Site Progress Report',
      uploadDate: '2024-01-14T16:45:00Z',
      downloadCount: 8
    },
    {
      id: 4,
      name: 'Compliance_Certificate.jpg',
      type: 'image',
      size: '847 KB',
      driveLink: 'https://drive.google.com/file/d/6677889900/view',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=6677889900',
      emailSubject: 'Supplier Certification Documents',
      uploadDate: '2024-01-14T14:20:00Z',
      downloadCount: 2
    }
  ];

  const handleDownload = async (attachment: typeof mockAttachments[0]) => {
    try {
      setDownloadingFiles(prev => new Set(prev).add(attachment.id));
      
      // Show download starting toast
      toast({
        title: "Download Started",
        description: `Downloading ${attachment.name}...`,
      });

      // Simulate download delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Create a temporary link and trigger download
      const link = document.createElement('a');
      link.href = attachment.downloadUrl;
      link.download = attachment.name;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success toast
      toast({
        title: "Download Complete",
        description: `${attachment.name} has been downloaded successfully.`,
      });

      // Update download count (in real app, this would be an API call)
      console.log(`Downloaded: ${attachment.name}`);
      
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Download Failed",
        description: `Failed to download ${attachment.name}. Please try again.`,
      });
      console.error('Download error:', error);
    } finally {
      setDownloadingFiles(prev => {
        const newSet = new Set(prev);
        newSet.delete(attachment.id);
        return newSet;
      });
    }
  };

  const handleViewInDrive = (attachment: typeof mockAttachments[0]) => {
    window.open(attachment.driveLink, '_blank');
    toast({
      title: "Opening in Google Drive",
      description: `Opening ${attachment.name} in a new tab...`,
    });
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return FileText;
      case 'image':
        return Image;
      case 'archive':
        return Archive;
      default:
        return File;
    }
  };

  const getFileTypeColor = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'spreadsheet':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'image':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'archive':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm border-white/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">3,421</p>
                <p className="text-sm text-gray-600">Total Attachments</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-white/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                <Archive className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">47.2 GB</p>
                <p className="text-sm text-gray-600">Storage Used</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-white/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
                <p className="text-sm text-gray-600">Downloads</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attachments List */}
      <Card className="bg-white/80 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-blue-500" />
            <span>Recent Attachments</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockAttachments.map((attachment) => {
              const FileIcon = getFileIcon(attachment.type);
              const isDownloading = downloadingFiles.has(attachment.id);
              
              return (
                <div key={attachment.id} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-lg hover:bg-gray-100/50 transition-colors duration-200">
                  <div className="flex items-center space-x-4 flex-1 min-w-0">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <FileIcon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-gray-900 truncate">{attachment.name}</h4>
                        <Badge className={getFileTypeColor(attachment.type)}>
                          {attachment.type.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 truncate mb-1">
                        From: {attachment.emailSubject}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{attachment.size}</span>
                        <span>{formatDate(attachment.uploadDate)}</span>
                        <span>{attachment.downloadCount} downloads</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="bg-white/50"
                      onClick={() => handleDownload(attachment)}
                      disabled={isDownloading}
                    >
                      <Download className={`w-4 h-4 ${isDownloading ? 'animate-pulse' : ''}`} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="bg-white/50"
                      onClick={() => handleViewInDrive(attachment)}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
