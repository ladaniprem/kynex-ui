"use client"

import type React from "react"

import { useState, useEffect, useRef, type KeyboardEvent } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  Search,
  Send,
  BarChart2,
  Video,
  PlaneTakeoff,
  AudioLines,
  LayoutGrid,
  Command,
  Settings,
  FileText,
  Calendar,
  Mail,
  MessageSquare,
  Globe,
  Zap,
  Sparkles,
  Palette,
  Bookmark,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Action {
  id: string
  label: string
  icon: React.ReactNode
  description?: string
  shortcut?: string
  category?: string
  tags?: string[]
  color?: string
  isNew?: boolean
  isPinned?: boolean
  execute?: () => void
}

interface ActionCategory {
  name: string
  actions: Action[]
}

interface SearchResult {
  categories: ActionCategory[]
  recentActions: Action[]
  suggestedActions: Action[]
}

// Kriyex UI component actions
const allActions: Action[] = [
  // AI Input Components
  {
    id: "ai-input-01",
    label: "AI Input 01",
    icon: <AudioLines className="h-4 w-4" style={{ color: "#8b5cf6" }} />,
    description: "AI-powered input component with smart suggestions",
    category: "AI Input",
    tags: ["ai", "input", "smart", "suggestions"],
    color: "#8b5cf6",
    isNew: true,
  },
  {
    id: "ai-input-02",
    label: "AI Input 02",
    icon: <AudioLines className="h-4 w-4" style={{ color: "#8b5cf6" }} />,
    description: "Advanced AI input with real-time processing",
    category: "AI Input",
    tags: ["ai", "input", "realtime", "processing"],
    color: "#8b5cf6",
  },
  // Alert Components
  {
    id: "alert-01",
    label: "Alert 01",
    icon: <MessageSquare className="h-4 w-4" style={{ color: "#f43f5e" }} />,
    description: "Success alert with icon and dismiss button",
    category: "Alert",
    tags: ["alert", "notification", "success", "dismiss"],
    color: "#f43f5e",
    isPinned: true,
  },
  {
    id: "alert-02",
    label: "Alert 02",
    icon: <MessageSquare className="h-4 w-4" style={{ color: "#f43f5e" }} />,
    description: "Warning alert with detailed message",
    category: "Alert",
    tags: ["alert", "warning", "notification", "message"],
    color: "#f43f5e",
  },
  // Background Components
  {
    id: "background-circles",
    label: "Background Circles",
    icon: <Sparkles className="h-4 w-4" style={{ color: "#a855f7" }} />,
    description: "Animated circle background with gradients",
    category: "Background",
    tags: ["background", "circles", "animated", "gradient"],
    color: "#a855f7",
    isNew: true,
  },
  {
    id: "beams-background",
    label: "Beams Background",
    icon: <Sparkles className="h-4 w-4" style={{ color: "#a855f7" }} />,
    description: "Animated light beams background effect",
    category: "Background",
    tags: ["background", "beams", "animated", "light"],
    color: "#a855f7",
  },
  // Dashboard Components
  {
    id: "dashboard-layout",
    label: "Dashboard Layout",
    icon: <LayoutGrid className="h-4 w-4" style={{ color: "#0ea5e9" }} />,
    description: "Complete dashboard layout with sidebar and navigation",
    category: "Dashboard",
    tags: ["dashboard", "layout", "sidebar", "navigation"],
    color: "#0ea5e9",
    isPinned: true,
  },
  {
    id: "auth-basic",
    label: "Auth Basic",
    icon: <Settings className="h-4 w-4" style={{ color: "#6b7280" }} />,
    description: "Basic authentication form with social login",
    category: "Auth",
    tags: ["auth", "login", "form", "social"],
    color: "#6b7280",
  },
  // List Components
  {
    id: "list-05",
    label: "List 05",
    icon: <FileText className="h-4 w-4" style={{ color: "#ec4899" }} />,
    description: "Music playlist list with album covers",
    category: "List",
    tags: ["list", "music", "playlist", "album"],
    color: "#ec4899",
  },
  // Pricing Components
  {
    id: "pricing-01",
    label: "Pricing 01",
    icon: <Bookmark className="h-4 w-4" style={{ color: "#0d9488" }} />,
    description: "Simple pricing card with features list",
    category: "Pricing",
    tags: ["pricing", "card", "features", "subscription"],
    color: "#0d9488",
    isNew: true,
  },
  {
    id: "pricing-06",
    label: "Pricing 06",
    icon: <Bookmark className="h-4 w-4" style={{ color: "#0d9488" }} />,
    description: "Handwritten style pricing with decorative elements",
    category: "Pricing",
    tags: ["pricing", "handwritten", "decorative", "creative"],
    color: "#0d9488",
  },
  // Profile Components
  {
    id: "profile-04",
    label: "Profile 04",
    icon: <Globe className="h-4 w-4" style={{ color: "#0284c7" }} />,
    description: "User profile with stats and achievements",
    category: "Profile",
    tags: ["profile", "stats", "achievements", "user"],
    color: "#0284c7",
  },
  // Tweet Card
  {
    id: "tweet-card",
    label: "Tweet Card",
    icon: <MessageSquare className="h-4 w-4" style={{ color: "#f43f5e" }} />,
    description: "Twitter-style card with reply functionality",
    category: "Social",
    tags: ["tweet", "card", "social", "twitter"],
    color: "#f43f5e",
    isPinned: true,
  },
  // Component Library (main action)
  {
    id: "component-library",
    label: "Component Library",
    icon: <LayoutGrid className="h-4 w-4" style={{ color: "#0ea5e9" }} />,
    description: "Browse all Kriyex UI components",
    shortcut: "⌘L",
    category: "Navigation",
    tags: ["components", "library", "ui", "browse"],
    color: "#0ea5e9",
    isPinned: true,
  },
]

// Group actions by category
const groupActionsByCategory = (actions: Action[]): ActionCategory[] => {
  const categories: Record<string, Action[]> = {}

  actions.forEach((action) => {
    const category = action.category || "Uncategorized"
    if (!categories[category]) {
      categories[category] = []
    }
    categories[category].push(action)
  })

  return Object.entries(categories).map(([name, actions]) => ({
    name,
    actions,
  }))
}

export default function ActionSearchBar({
  defaultOpen = false,
  className,
}: {
  defaultOpen?: boolean
  className?: string
}) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(defaultOpen)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [recentActions] = useState<Action[]>(allActions.filter((a) => a.isPinned).slice(0, 3))
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // Process and filter actions based on query
  const getSearchResults = (): SearchResult => {
    if (!query.trim()) {
      // Show categories, recent and suggested when no query
      return {
        categories: groupActionsByCategory(allActions),
        recentActions: recentActions,
        suggestedActions: allActions.filter((a) => a.isNew).slice(0, 3),
      }
    }

    const normalizedQuery = query.toLowerCase().trim()
    const filteredActions = allActions.filter((action) => {
      const searchableText = [
        action.label.toLowerCase(),
        action.description?.toLowerCase() || "",
        ...(action.tags || []).map((tag) => tag.toLowerCase()),
      ].join(" ")

      return searchableText.includes(normalizedQuery)
    })

    // If filtering by category, only show that category
    if (activeCategory) {
      const categoryActions = filteredActions.filter((a) => a.category === activeCategory)
      return {
        categories: [
          {
            name: activeCategory,
            actions: categoryActions,
          },
        ],
        recentActions: [],
        suggestedActions: [],
      }
    }

    return {
      categories: groupActionsByCategory(filteredActions),
      recentActions: [],
      suggestedActions: [],
    }
  }

  const searchResults = getSearchResults()

  // Calculate total number of visible actions for keyboard navigation
  const getAllVisibleActions = (): Action[] => {
    const allVisible: Action[] = []

    if (searchResults.recentActions.length > 0) {
      allVisible.push(...searchResults.recentActions)
    }

    if (searchResults.suggestedActions.length > 0) {
      allVisible.push(...searchResults.suggestedActions)
    }

    searchResults.categories.forEach((category) => {
      allVisible.push(...category.actions)
    })

    return allVisible
  }

  const visibleActions = getAllVisibleActions()

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0)
  }, [query, activeCategory])

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % visibleActions.length)
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + visibleActions.length) % visibleActions.length)
        break
      case "Enter":
        e.preventDefault()
        if (visibleActions[selectedIndex]) {
          executeAction(visibleActions[selectedIndex])
        }
        break
      case "Escape":
        e.preventDefault()
        setIsFocused(false)
        inputRef.current?.blur()
        break
    }
  }

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current) {
      const selectedElement = resultsRef.current.querySelector(`[data-index="${selectedIndex}"]`)
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest", behavior: "smooth" })
      }
    }
  }, [selectedIndex])

  // Global keyboard shortcut to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
        setIsFocused(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown as any)
    return () => window.removeEventListener("keydown", handleKeyDown as any)
  }, [])

  const executeAction = (action: Action) => {
    console.log(`Executing action: ${action.label}`)
    if (action.execute) {
      action.execute()
    }
    setIsFocused(false)
    setQuery("")
    inputRef.current?.blur()
  }

  const handleCategoryClick = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category))
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.2,
        staggerChildren: 0.03,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: {
        duration: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.1,
      },
    },
  }

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <div className="relative flex flex-col justify-start items-center">
        <div className="w-full sticky top-0 bg-background z-10 pt-4 pb-1">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-muted-foreground" htmlFor="action-search">
              Search Components
            </label>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border">
                ⌘K
              </kbd>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Command className="h-4 w-4" />
            </div>

            <Input
              ref={inputRef}
              id="action-search"
              type="text"
              placeholder="Search Kriyex UI components..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              onKeyDown={handleKeyDown}
              className="pl-9 pr-9 py-2 h-10 text-sm rounded-lg focus-visible:ring-offset-0 bg-background border-border"
            />

            <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4">
              <AnimatePresence mode="wait">
                {query.length > 0 ? (
                  <motion.div
                    key="send"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Send className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="search"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Search className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="w-full" ref={resultsRef}>
          <AnimatePresence>
            {isFocused && (
              <motion.div
                className="w-full border rounded-lg shadow-lg overflow-hidden bg-popover mt-1 max-h-[70vh] overflow-y-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Category filters */}
                {searchResults.categories.length > 1 && (
                  <motion.div className="p-2 border-b flex gap-1 flex-wrap" variants={itemVariants}>
                    {searchResults.categories.map((category) => (
                      <Badge
                        key={category.name}
                        variant={activeCategory === category.name ? "default" : "outline"}
                        className="cursor-pointer hover:bg-accent transition-colors"
                        onClick={() => handleCategoryClick(category.name)}
                      >
                        {category.name}
                      </Badge>
                    ))}
                  </motion.div>
                )}

                {/* Recent actions */}
                {searchResults.recentActions.length > 0 && (
                  <motion.div variants={itemVariants}>
                    <div className="px-3 pt-2 pb-1">
                      <h3 className="text-xs font-medium text-muted-foreground">Recent</h3>
                    </div>
                    <ul>
                      {searchResults.recentActions.map((action, idx) => (
                        <motion.li
                          key={action.id}
                          data-index={idx}
                          className={cn(
                            "px-3 py-2 mx-1 my-0.5 flex items-center justify-between hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-md transition-colors",
                            selectedIndex === idx ? "bg-accent text-accent-foreground" : "",
                          )}
                          variants={itemVariants}
                          onClick={() => executeAction(action)}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="flex items-center justify-center w-6 h-6 rounded-md"
                              style={{ backgroundColor: `${action.color}20` }}
                            >
                              {action.icon}
                            </div>
                            <div>
                              <div className="text-sm font-medium">{action.label}</div>
                              <div className="text-xs text-muted-foreground">{action.description}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {action.shortcut && (
                              <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border">
                                {action.shortcut}
                              </kbd>
                            )}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Suggested actions */}
                {searchResults.suggestedActions.length > 0 && (
                  <motion.div variants={itemVariants}>
                    <div className="px-3 pt-2 pb-1">
                      <h3 className="text-xs font-medium text-muted-foreground">Suggested</h3>
                    </div>
                    <ul>
                      {searchResults.suggestedActions.map((action, idx) => {
                        const actionIndex = searchResults.recentActions.length + idx
                        return (
                          <motion.li
                            key={action.id}
                            data-index={actionIndex}
                            className={cn(
                              "px-3 py-2 mx-1 my-0.5 flex items-center justify-between hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-md transition-colors",
                              selectedIndex === actionIndex ? "bg-accent text-accent-foreground" : "",
                            )}
                            variants={itemVariants}
                            onClick={() => executeAction(action)}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="flex items-center justify-center w-6 h-6 rounded-md"
                                style={{ backgroundColor: `${action.color}20` }}
                              >
                                {action.icon}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium">{action.label}</span>
                                  {action.isNew && (
                                    <Badge
                                      variant="default"
                                      className="text-[10px] px-1 py-0 h-4 bg-emerald-500 hover:bg-emerald-500"
                                    >
                                      New
                                    </Badge>
                                  )}
                                </div>
                                <div className="text-xs text-muted-foreground">{action.description}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {action.shortcut && (
                                <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border">
                                  {action.shortcut}
                                </kbd>
                              )}
                            </div>
                          </motion.li>
                        )
                      })}
                    </ul>
                  </motion.div>
                )}

                {/* Categorized actions */}
                {searchResults.categories.map((category, categoryIndex) => {
                  const startingIndex = searchResults.recentActions.length + searchResults.suggestedActions.length

                  return (
                    <motion.div key={category.name} variants={itemVariants}>
                      <div className="px-3 pt-2 pb-1">
                        <h3 className="text-xs font-medium text-muted-foreground">{category.name}</h3>
                      </div>
                      <ul>
                        {category.actions.map((action, idx) => {
                          // Calculate the absolute index for this action
                          let actionIndex = startingIndex
                          for (let i = 0; i < categoryIndex; i++) {
                            actionIndex += searchResults.categories[i].actions.length
                          }
                          actionIndex += idx

                          return (
                            <motion.li
                              key={action.id}
                              data-index={actionIndex}
                              className={cn(
                                "px-3 py-2 mx-1 my-0.5 flex items-center justify-between hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-md transition-colors",
                                selectedIndex === actionIndex ? "bg-accent text-accent-foreground" : "",
                              )}
                              variants={itemVariants}
                              onClick={() => executeAction(action)}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className="flex items-center justify-center w-6 h-6 rounded-md"
                                  style={{ backgroundColor: `${action.color}20` }}
                                >
                                  {action.icon}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium">{action.label}</span>
                                    {action.isNew && (
                                      <Badge
                                        variant="default"
                                        className="text-[10px] px-1 py-0 h-4 bg-emerald-500 hover:bg-emerald-500"
                                      >
                                        New
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="text-xs text-muted-foreground">{action.description}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                {action.shortcut && (
                                  <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border">
                                    {action.shortcut}
                                  </kbd>
                                )}
                              </div>
                            </motion.li>
                          )
                        })}
                      </ul>
                    </motion.div>
                  )
                })}

                {/* Footer with keyboard shortcuts */}
                <motion.div
                  className="mt-1 px-3 py-2 border-t flex items-center justify-between text-xs text-muted-foreground"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <kbd className="px-1 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border">
                        ↑
                      </kbd>
                      <kbd className="px-1 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border">
                        ↓
                      </kbd>
                      <span>to navigate</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <kbd className="px-1 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border">
                        enter
                      </kbd>
                      <span>to select</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <kbd className="px-1 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border">
                      esc
                    </kbd>
                    <span>to close</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
