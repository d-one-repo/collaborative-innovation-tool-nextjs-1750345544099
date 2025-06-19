import { Plus, Edit, X, Check, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
const initialIdeas = [
  {
    id: 1,
    title: 'AI-Assisted Peer Review',
    description: 'Leverage AI to streamline peer review for medical journals.',
    status: 'In Discussion',
    contributors: ['Louisa Mott', 'Dr. Chen (Partner)']
  },
  {
    id: 2,
    title: 'Interactive Surgical Simulations',
    description: 'Develop web-based simulations for surgical training.',
    status: 'Prototype',
    contributors: ['Louisa Mott', 'MedTech Labs']
  },
  {
    id: 3,
    title: 'Open Access Data Platform',
    description: 'Create a platform for sharing anonymized surgical data.',
    status: 'Approved',
    contributors: ['Louisa Mott', 'DataHealth Partners']
  }
]
export default function IdeaList() {
  const [ideas, setIdeas] = useState(initialIdeas)
  const [isOpen, setIsOpen] = useState(false)
  const [newIdea, setNewIdea] = useState({ title: '', description: '' })
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
    setNewIdea({ title: '', description: '' })
  }
  function handleChange(e) {
    setNewIdea({ ...newIdea, [e.target.name]: e.target.value })
  }
  function addIdea(e) {
    e.preventDefault()
    if (!newIdea.title.trim() || !newIdea.description.trim()) return
    setIdeas([
      ...ideas,
      {
        id: ideas.length + 1,
        title: newIdea.title,
        description: newIdea.description,
        status: 'In Discussion',
        contributors: ['Louisa Mott']
      }
    ])
    closeModal()
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600 text-sm">Joint Product Ideas</span>
        <button
          className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={openModal}
        >
          <Plus size={18} />
          Add Idea
        </button>
      </div>
      <ul className="space-y-4">
        {ideas.map((idea) => (
          <li key={idea.id} className="bg-white rounded shadow p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-blue-800">{idea.title}</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{idea.status}</span>
              </div>
              <button className="p-1 rounded hover:bg-gray-100">
                <MoreHorizontal size={18} />
              </button>
            </div>
            <p className="text-gray-700 text-sm">{idea.description}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-500">Contributors:</span>
              {idea.contributors.map((c, idx) => (
                <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{c}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <Transition show={isOpen} as="div">
        <Dialog onClose={closeModal} className="fixed z-20 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full mx-auto p-6 z-30">
              <Dialog.Title className="text-lg font-semibold flex items-center gap-2 mb-2">
                <Plus size={20} className="text-blue-600" />
                New Idea
              </Dialog.Title>
              <form onSubmit={addIdea} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    name="title"
                    value={newIdea.title}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    name="description"
                    value={newIdea.description}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    rows={3}
                    required
                  />
                </div>
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex items-center gap-1 px-3 py-1.5 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    <X size={16} />
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-1 px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <Check size={16} />
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}