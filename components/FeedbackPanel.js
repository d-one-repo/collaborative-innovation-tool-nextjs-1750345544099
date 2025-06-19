import { User, Star, Mail, Calendar, ChevronRight } from 'lucide-react'
const feedbacks = [
  {
    id: 1,
    partner: 'Dr. Chen (Partner)',
    date: '2024-06-01',
    comment: 'The AI review tool could benefit from more transparency in decision-making.',
    rating: 4
  },
  {
    id: 2,
    partner: 'MedTech Labs',
    date: '2024-05-28',
    comment: 'Simulation graphics are impressive. Would like to see more procedure types.',
    rating: 5
  },
  {
    id: 3,
    partner: 'DataHealth Partners',
    date: '2024-05-20',
    comment: 'Data privacy is a top concern. Recommend additional anonymization features.',
    rating: 3
  }
]
function renderStars(count) {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        key={i}
        size={16}
        className={i < count ? 'text-yellow-400 fill-yellow-300' : 'text-gray-300'}
        fill={i < count ? 'currentColor' : 'none'}
      />
    )
  }
  return stars
}
export default function FeedbackPanel() {
  return (
    <div className="bg-white rounded shadow p-4 space-y-4">
      {feedbacks.map((fb) => (
        <div key={fb.id} className="border-b last:border-b-0 pb-3 last:pb-0 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <User size={18} className="text-purple-600" />
            <span className="font-semibold text-gray-800">{fb.partner}</span>
            <ChevronRight size={14} className="text-gray-300" />
            <Calendar size={14} className="text-gray-400" />
            <span className="text-xs text-gray-500">{fb.date}</span>
          </div>
          <div className="flex items-center gap-1 mt-1">{renderStars(fb.rating)}</div>
          <p className="text-gray-700 text-sm mt-1">{fb.comment}</p>
        </div>
      ))}
    </div>
  )
}