import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/sidebar'
import { ErrorBoundary } from '@/components/error-boundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '技术栈全景图 | TechStack Panorama',
  description: '全栈技术栈可视化展示平台 - 涵盖前端、后端(Python/Go/Java/Rust/Node.js)、AI开发、基础设施等完整技术生态',
  keywords: ['技术栈', '前端', '后端', 'AI开发', '基础设施', 'Python', 'Go', 'Java', 'Rust', 'Node.js', 'React', 'Next.js'],
  authors: [{ name: 'TechStack Panorama Team' }],
  creator: 'TechStack Panorama',
  metadataBase: new URL('https://techstack-panorama.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '技术栈全景图 | TechStack Panorama',
    description: '全栈技术栈可视化展示平台 - 涵盖前端、后端、AI开发、基础设施等完整技术生态',
    url: 'https://techstack-panorama.vercel.app',
    siteName: 'TechStack Panorama',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '技术栈全景图 | TechStack Panorama',
    description: '全栈技术栈可视化展示平台 - 涵盖前端、后端、AI开发、基础设施等完整技术生态',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Sidebar />
        <main id="main-content" className="transition-all duration-300 ease-in-out" style={{ marginLeft: 'var(--sidebar-width, 16rem)' }}>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>
      </body>
    </html>
  )
}
