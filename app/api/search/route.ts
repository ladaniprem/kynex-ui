import { NextRequest, NextResponse } from 'next/server';

// Hardcoded search data with all your Kriyex UI components
const searchData = [
  // AI Input Components
  {
    id: '/components/ai-input/ai-input-01',
    title: 'AI Input 01',
    description: 'AI-powered input component with smart suggestions',
    url: '/docs/components/ai-input/ai-input-01',
    type: 'component',
    keywords: ['ai', 'input', 'smart', 'suggestions', 'ai-input-01']
  },
  {
    id: '/components/ai-input/ai-input-02',
    title: 'AI Input 02',
    description: 'Advanced AI input with real-time processing',
    url: '/docs/components/ai-input/ai-input-02',
    type: 'component',
    keywords: ['ai', 'input', 'realtime', 'processing', 'ai-input-02']
  },
  // Alert Components
  {
    id: '/components/alert/alert-01',
    title: 'Alert 01',
    description: 'Success alert with icon and dismiss button',
    url: '/docs/components/alert/alert-01',
    type: 'component',
    keywords: ['alert', 'notification', 'success', 'dismiss', 'alert-01']
  },
  {
    id: '/components/alert/alert-02',
    title: 'Alert 02',
    description: 'Warning alert with detailed message',
    url: '/docs/components/alert/alert-02',
    type: 'component',
    keywords: ['alert', 'warning', 'notification', 'message', 'alert-02']
  },
  {
    id: '/components/alert/alert-03',
    title: 'Alert 03',
    description: 'Error alert with action buttons',
    url: '/docs/components/alert/alert-03',
    type: 'component',
    keywords: ['alert', 'error', 'action', 'buttons', 'alert-03']
  },
  {
    id: '/components/alert/alert-04',
    title: 'Alert 04',
    description: 'Info alert with progress indicator',
    url: '/docs/components/alert/alert-04',
    type: 'component',
    keywords: ['alert', 'info', 'progress', 'indicator', 'alert-04']
  },
  {
    id: '/components/alert/alert-05',
    title: 'Alert 05',
    description: 'Minimal alert with subtle styling',
    url: '/docs/components/alert/alert-05',
    type: 'component',
    keywords: ['alert', 'minimal', 'subtle', 'styling', 'alert-05']
  },
  {
    id: '/components/alert/alert-06',
    title: 'Alert 06',
    description: 'Animated alert with slide-in effect',
    url: '/docs/components/alert/alert-06',
    type: 'component',
    keywords: ['alert', 'animated', 'slide', 'effect', 'alert-06']
  },
  {
    id: '/components/alert/alert-07',
    title: 'Alert 07',
    description: 'Toast-style alert with auto-dismiss',
    url: '/docs/components/alert/alert-07',
    type: 'component',
    keywords: ['alert', 'toast', 'auto', 'dismiss', 'alert-07']
  },
  // Background Components
  {
    id: '/components/Kriyexui/background-circles',
    title: 'Background Circles',
    description: 'Animated circle background with gradients',
    url: '/docs/components/Kriyexui/background-circles',
    type: 'component',
    keywords: ['background', 'circles', 'animated', 'gradient', 'circles']
  },
  {
    id: '/components/Kriyexui/beams-background',
    title: 'Beams Background',
    description: 'Animated light beams background effect',
    url: '/docs/components/Kriyexui/beams-background',
    type: 'component',
    keywords: ['background', 'beams', 'animated', 'light', 'beams']
  },
  {
    id: '/components/Kriyexui/background-paths',
    title: 'Background Paths',
    description: 'SVG paths background with animations',
    url: '/docs/components/Kriyexui/background-paths',
    type: 'component',
    keywords: ['background', 'paths', 'svg', 'animations', 'paths']
  },
  // Card Components
  {
    id: '/components/Kriyexui/card/card-01',
    title: 'Card 01',
    description: 'Social media card with engagement metrics',
    url: '/docs/components/Kriyexui/card/card-01',
    type: 'component',
    keywords: ['card', 'social', 'media', 'engagement', 'metrics', 'card-01']
  },
  // Dashboard Components
  {
    id: '/components/Kriyexui/blocks/dashboard/dashboard',
    title: 'Dashboard Layout',
    description: 'Complete dashboard layout with sidebar and navigation',
    url: '/docs/components/Kriyexui/blocks/dashboard/dashboard',
    type: 'component',
    keywords: ['dashboard', 'layout', 'sidebar', 'navigation', 'dashboard']
  },
  {
    id: '/components/Kriyexui/blocks/dashboard/sidebar',
    title: 'Dashboard Sidebar',
    description: 'Responsive sidebar with navigation menu',
    url: '/docs/components/Kriyexui/blocks/dashboard/sidebar',
    type: 'component',
    keywords: ['dashboard', 'sidebar', 'navigation', 'menu', 'responsive', 'sidebar']
  },
  {
    id: '/components/Kriyexui/blocks/dashboard/top-nav',
    title: 'Top Navigation',
    description: 'Top navigation bar with breadcrumbs and user menu',
    url: '/docs/components/Kriyexui/blocks/dashboard/top-nav',
    type: 'component',
    keywords: ['navigation', 'top', 'nav', 'breadcrumbs', 'user', 'menu', 'top-nav']
  },
  // List Components
  {
    id: '/components/Kriyexui/list/list-05',
    title: 'List 05',
    description: 'Music playlist list with album covers',
    url: '/docs/components/Kriyexui/list/list-05',
    type: 'component',
    keywords: ['list', 'music', 'playlist', 'album', 'covers', 'list-05']
  },
  // Pricing Components
  {
    id: '/components/Kriyexui/pricing/pricing-01',
    title: 'Pricing 01',
    description: 'Simple pricing card with features list',
    url: '/docs/components/Kriyexui/pricing/pricing-01',
    type: 'component',
    keywords: ['pricing', 'card', 'features', 'list', 'subscription', 'pricing-01']
  },
  {
    id: '/components/Kriyexui/pricing/pricing-02',
    title: 'Pricing 02',
    description: 'Tiered pricing with comparison table',
    url: '/docs/components/Kriyexui/pricing/pricing-02',
    type: 'component',
    keywords: ['pricing', 'tiered', 'comparison', 'table', 'pricing-02']
  },
  {
    id: '/components/Kriyexui/pricing/pricing-03',
    title: 'Pricing 03',
    description: 'Pricing with toggle between monthly/yearly',
    url: '/docs/components/Kriyexui/pricing/pricing-03',
    type: 'component',
    keywords: ['pricing', 'toggle', 'monthly', 'yearly', 'pricing-03']
  },
  {
    id: '/components/Kriyexui/pricing/pricing-04',
    title: 'Pricing 04',
    description: 'Minimal pricing cards with hover effects',
    url: '/docs/components/Kriyexui/pricing/pricing-04',
    type: 'component',
    keywords: ['pricing', 'minimal', 'hover', 'effects', 'pricing-04']
  },
  {
    id: '/components/Kriyexui/pricing/pricing-05',
    title: 'Pricing 05',
    description: 'Pricing cards with gradient backgrounds',
    url: '/docs/components/Kriyexui/pricing/pricing-05',
    type: 'component',
    keywords: ['pricing', 'gradient', 'backgrounds', 'pricing-05']
  },
  {
    id: '/components/Kriyexui/pricing/pricing-06',
    title: 'Pricing 06',
    description: 'Handwritten style pricing with decorative elements',
    url: '/docs/components/Kriyexui/pricing/pricing-06',
    type: 'component',
    keywords: ['pricing', 'handwritten', 'decorative', 'elements', 'pricing-06']
  },
  // Profile Components
  {
    id: '/components/Kriyexui/profile/profile-01',
    title: 'Profile 01',
    description: 'User profile card with avatar and stats',
    url: '/docs/components/Kriyexui/profile/profile-01',
    type: 'component',
    keywords: ['profile', 'user', 'avatar', 'stats', 'profile-01']
  },
  {
    id: '/components/Kriyexui/profile/profile-02',
    title: 'Profile 02',
    description: 'Professional profile with contact information',
    url: '/docs/components/Kriyexui/profile/profile-02',
    type: 'component',
    keywords: ['profile', 'professional', 'contact', 'information', 'profile-02']
  },
  {
    id: '/components/Kriyexui/profile/profile-04',
    title: 'Profile 04',
    description: 'User profile with stats and achievements',
    url: '/docs/components/Kriyexui/profile/profile-04',
    type: 'component',
    keywords: ['profile', 'stats', 'achievements', 'user', 'profile-04']
  },
  // Social Components
  {
    id: '/components/Kriyexui/tweet-card',
    title: 'Tweet Card',
    description: 'Twitter-style card with reply functionality',
    url: '/docs/components/Kriyexui/tweet-card',
    type: 'component',
    keywords: ['tweet', 'card', 'social', 'twitter', 'reply', 'tweet-card']
  },
  // Auth Components
  {
    id: '/components/Kriyexui/blocks/auth-basic/auth-basic',
    title: 'Auth Basic',
    description: 'Basic authentication form with social login',
    url: '/docs/components/Kriyexui/blocks/auth-basic/auth-basic',
    type: 'component',
    keywords: ['auth', 'authentication', 'login', 'form', 'social', 'auth-basic']
  },
  // Documentation Pages
  {
    id: '/docs/components',
    title: 'Components Overview',
    description: 'Browse all Kriyex UI components',
    url: '/docs/components',
    type: 'page',
    keywords: ['components', 'overview', 'browse', 'ui', 'kriyex']
  },
  {
    id: '/docs/components/alert',
    title: 'Alert Components',
    description: 'Alert and notification components',
    url: '/docs/components/alert',
    type: 'page',
    keywords: ['alert', 'notification', 'components', 'alerts']
  },
  {
    id: '/docs/components/pricing',
    title: 'Pricing Components',
    description: 'Pricing table and card components',
    url: '/docs/components/pricing',
    type: 'page',
    keywords: ['pricing', 'components', 'tables', 'cards']
  }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || '';

  if (!query || query.length < 2) {
    return NextResponse.json([]);
  }

  try {
    const normalizedQuery = query.toLowerCase();
    
    // Search through hardcoded data
    const results = searchData.filter(item => {
      const searchableText = [
        item.title.toLowerCase(),
        item.description.toLowerCase(),
        ...item.keywords
      ].join(' ');
      
      return searchableText.includes(normalizedQuery);
    }).map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      url: item.url,
      content: item.description,
      type: item.type
    })).slice(0, 10);

    console.log(`Search for "${query}" found ${results.length} results`);
    
    return NextResponse.json(results);
  } catch (error) {
    console.error('Search error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Search failed', details: errorMessage }, { status: 500 });
  }
}