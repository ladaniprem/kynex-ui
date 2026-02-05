# Kynex UI

A modern, comprehensive UI component library built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Kynex UI provides a rich collection of beautifully designed, fully accessible components for building modern web applications.

## ✨ Features

- 🚀 **Next.js 16** with App Router and Turbopack
- ⚛️ **React 19** with Server Components
- 🎨 **Tailwind CSS** for modern styling
- 📝 **TypeScript** for type safety
- 📚 **Fumadocs** for beautiful documentation
- 🎭 **Framer Motion** for smooth animations
- 🌙 **Dark Mode** support
- 🔧 **Component Library** with 30+ components
- 📖 **Interactive Documentation** with live previews

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kynex-ui
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
kynex-ui/
├── app/                    # Next.js App Router
│   ├── docs/              # Documentation pages
│   ├── preview/           # Component preview pages
│   ├── (root)/            # Root layout
│   └── layout.tsx         # Root layout component
├── components/            # React components
│   ├── Kriyexui/         # Main component library
│   │   ├── ai-input/      # AI input components
│   │   ├── button/        # Button components
│   │   ├── card/          # Card components
│   │   └── ...            # Other component categories
│   ├── mdx/              # MDX-related components
│   └── ui/               # Base UI components
├── content/              # MDX content
│   └── docs/             # Documentation content
├── lib/                  # Utility libraries
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── styles/               # Global styles
```

## 🧩 Components

### UI Components

- **Buttons**: Various button styles with animations
- **Cards**: Flexible card layouts
- **Inputs**: Form inputs with validation
- **Navigation**: Navigation components
- **Modals**: Dialog and modal components
- **Loading**: Loading states and spinners

### Advanced Components

- **AI Input**: Smart input components with AI features
- **Background Effects**: Animated backgrounds (particles, beams, etc.)
- **Hero Sections**: Landing page hero components
- **Pricing Tables**: Pricing display components
- **Profile Cards**: User profile components
- **Text Effects**: Animated text components

### Blocks

- **AI Chat**: Chat interface components
- **Dashboard**: Dashboard layouts
- **Authentication**: Auth flow components
- **E-commerce**: Shop and checkout components

## 📚 Documentation

The documentation is built with Fumadocs and includes:

- **Interactive Demos**: Live component previews
- **API Reference**: Detailed component props
- **Usage Examples**: Real-world implementation examples
- **Design Guidelines**: Best practices and tips

Access the documentation at [http://localhost:3000/docs](http://localhost:3000/docs)

## 🎨 Customization

### Theming

The project uses Tailwind CSS with a custom theme. You can customize colors, spacing, and other design tokens in `tailwind.config.ts`.

### Dark Mode

Dark mode is supported out of the box. The theme automatically switches based on user preferences or manual toggle.

### Component Customization

Components are built with extensibility in mind:

```typescript
import { Button } from '@/components/Kriyexui/button';

function CustomButton() {
  return (
    <Button 
      variant="outline" 
      size="lg"
      className="custom-styles"
    >
      Custom Button
    </Button>
  );
}
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Adding New Components

1. Create component in `components/Kriyexui/[category]/`
2. Add component exports in index files
3. Create documentation in `content/docs/components/`
4. Add preview in `content/docs/components/[component].mdx`

### Component Structure

```typescript
'use client';

import { cn } from '@/lib/utils';

interface ComponentProps {
  className?: string;
  children: React.ReactNode;
  // ... other props
}

export function Component({ className, children, ...props }: ComponentProps) {
  return (
    <div className={cn('base-styles', className)} {...props}>
      {children}
    </div>
  );
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Fumadocs](https://fumadocs.vercel.app/) - Documentation framework
- [Lucide React](https://lucide.dev/) - Icon library

## 📞 Support

If you have any questions or need help:

- Create an issue on GitHub
- Check the documentation
- Join our community discussions

---

**Built with ❤️ by the Kynex UI team**
