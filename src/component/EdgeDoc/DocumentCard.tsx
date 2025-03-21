import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Document data
const documents = {
  all: [
    {
      id: 'edgefund-kid',
      title: 'EdgeFund KID',
      description: 'Key investor information document with all the essential details about EdgeFund investment opportunities and risk factors.',
      icon: 'document',
      category: 'fund'
    },
    {
      id: 'subscription-natural',
      title: 'Subscription Forms (Natural Persons)',
      description: 'Complete subscription forms for individual investors looking to participate in EdgeFund opportunities.',
      icon: 'person',
      category: 'fund'
    },
    {
      id: 'subscription-bvs',
      title: 'Subscription Forms (BVs)',
      description: 'Subscription forms for private limited companies (BVs) interested in EdgeFund investment opportunities.',
      icon: 'building',
      category: 'fund'
    },
    {
      id: 'edgefund-change',
      title: 'EdgeFund Change Form',
      description: 'Update your EdgeFund account details, investment preferences, or personal information with this change form.',
      icon: 'form',
      category: 'fund'
    },
    {
      id: 'edge-capital-kid',
      title: 'Edge Capital KID',
      description: 'Key investor information document outlining all essential details about Edge Capital Bond offerings.',
      icon: 'document',
      category: 'bond'
    },
    {
      id: 'bond-subscription-natural',
      title: 'Bond Subscription (Natural Persons)',
      description: 'Complete subscription forms for individual investors interested in Edge Capital Bond opportunities.',
      icon: 'person',
      category: 'bond'
    },
    {
      id: 'bond-subscription-bvs',
      title: 'Bond Subscription (BVs)',
      description: 'Subscription forms for private limited companies (BVs) interested in Edge Capital Bond investments.',
      icon: 'building',
      category: 'bond'
    },
    {
      id: 'privacy-cookies',
      title: 'Privacy and Cookies Policy',
      description: 'Comprehensive overview of how Edge Capital handles your personal data and information privacy.',
      icon: 'privacy',
      category: 'privacy'
    },
    {
      id: 'data-rights',
      title: 'Data and Rights',
      description: 'Information about your rights regarding your personal data and how to exercise those rights with Edge Capital.',
      icon: 'rights',
      category: 'privacy'
    }
  ],
  fund: [
    {
      id: 'subscription-natural',
      title: 'Subscription Forms (Natural Persons)',
      description: 'Complete subscription forms for individual investors looking to participate in EdgeFund opportunities.',
      icon: 'person',
      category: 'fund'
    },
    {
      id: 'subscription-bvs',
      title: 'Subscription Forms (BVs)',
      description: 'Subscription forms for private limited companies (BVs) interested in EdgeFund investment opportunities.',
      icon: 'building',
      category: 'fund'
    },
    {
      id: 'edgefund-kid',
      title: 'EdgeFund KID',
      description: 'Key investor information document with all the essential details about EdgeFund investment opportunities and risk factors.',
      icon: 'document',
      category: 'fund'
    },
    {
      id: 'edgefund-change',
      title: 'EdgeFund Change Form',
      description: 'Update your EdgeFund account details, investment preferences, or personal information with this change form.',
      icon: 'form',
      category: 'fund'
    },
  ],
  bond: [
    {
      id: 'bond-subscription-natural',
      title: 'Bond Subscription (Natural Persons)',
      description: 'Complete subscription forms for individual investors interested in Edge Capital Bond opportunities.',
      icon: 'person',
      category: 'bond'
    },
    {
      id: 'bond-subscription-bvs',
      title: 'Bond Subscription (BVs)',
      description: 'Subscription forms for private limited companies (BVs) interested in Edge Capital Bond investments.',
      icon: 'building',
      category: 'bond'
    },
    {
      id: 'edge-capital-kid',
      title: 'Edge Capital KID',
      description: 'Key investor information document outlining all essential details about Edge Capital Bond offerings.',
      icon: 'document',
      category: 'bond'
    }
  ],
  privacy: [
    {
      id: 'privacy-cookies',
      title: 'Privacy and Cookies Policy',
      description: 'Comprehensive overview of how Edge Capital handles your personal data and information privacy.',
      icon: 'privacy',
      category: 'privacy'
    },
    {
      id: 'data-rights',
      title: 'Data and Rights',
      description: 'Information about your rights regarding your personal data and how to exercise those rights with Edge Capital.',
      icon: 'rights',
      category: 'privacy'
    }
  ]
};

// Icons component
const Icon = ({ type }) => {
  switch (type) {
    case 'document':
      return (
        <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1v5h5v10H6V3h7z" />
          </svg>
        </div>
      );
    case 'person':
      return (
        <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      );
    case 'building':
      return (
        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
          </svg>
        </div>
      );
    case 'form':
      return (
        <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        </div>
      );
    case 'privacy':
      return (
        <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
          </svg>
        </div>
      );
    case 'rights':
      return (
        <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
      );
    default:
      return (
        <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          </svg>
        </div>
      );
  }
};

// Document Card component
const DocumentCard = ({ document }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-shrink-0">
          <Icon type={document.icon} />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-medium text-gray-900 mb-1">{document.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{document.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">PDF</span>
            <button 
              className="flex items-center text-sm text-gray-700 hover:text-blue-600"
              aria-label={`Download ${document.title}`}
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main component
const DocumentCardSections = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const tabs = [
    { id: 'all', label: 'All Documents' },
    { id: 'fund', label: 'Fund Documents' },
    { id: 'bond', label: 'Bond Documents' },
    { id: 'privacy', label: 'Privacy & Legal' }
  ];

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto" aria-labelledby="documents-heading">
      <h2 id="documents-heading" className="sr-only">Edge Documents</h2>
      
      {/* Tabs */}
      <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
        <div className="inline-flex bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-500 hover:text-gray-900'
              }`}
              aria-current={activeTab === tab.id ? 'page' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Document Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {documents[activeTab].map((doc) => (
            <motion.div 
              key={doc.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DocumentCard document={doc} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DocumentCardSections;