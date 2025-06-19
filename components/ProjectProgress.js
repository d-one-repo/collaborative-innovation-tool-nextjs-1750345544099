import { Layers, Check, Edit, ChevronRight } from 'lucide-react'
const projects = [
  {
    id: 1,
    name: 'AI-Assisted Peer Review',
    stages: [
    ]
  },
  {
    id: 2,
    name: 'Interactive Surgical Simulations',
    stages: [
    ]
  },
  {
    id: 3,
    name: 'Open Access Data Platform',
    stages: [
    ]
  }
]
export default function ProjectProgress() {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-white rounded shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <Layers size={20} className="text-blue-500" />
            <span className="font-semibold text-gray-800">{project.name}</span>
          </div>
          <div className="flex items-center gap-0.5 overflow-x-auto">
            {project.stages.map((stage, idx) => (
              <div key={stage.label} className="flex items-center">
                  <span className="text-xs">{stage.label}</span>
                </div>
                {idx < project.stages.length - 1 && (
                  <ChevronRight size={16} className="mx-1 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}