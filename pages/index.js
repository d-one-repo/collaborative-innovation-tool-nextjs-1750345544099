import { Home, Plus, User, Layers, ChevronRight, Edit, Check, X, MoreHorizontal } from 'lucide-react'
import Header from '../components/Header'
import IdeaList from '../components/IdeaList'
import ProjectProgress from '../components/ProjectProgress'
import FeedbackPanel from '../components/FeedbackPanel'
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-8">
        <section className="w-full lg:w-2/5 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Layers size={24} className="text-blue-600" />
            <h2 className="text-xl font-semibold">Co-Created Ideas</h2>
          </div>
          <IdeaList />
        </section>
        <section className="w-full lg:w-3/5 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Home size={24} className="text-green-600" />
            <h2 className="text-xl font-semibold">Project Progress</h2>
          </div>
          <ProjectProgress />
          <div className="flex items-center gap-2 mt-8">
            <User size={24} className="text-purple-600" />
            <h2 className="text-xl font-semibold">Partner Feedback</h2>
          </div>
          <FeedbackPanel />
        </section>
      </main>
    </div>
  )
}