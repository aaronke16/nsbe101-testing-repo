import ItemCard from "./item-card"

const items = [
  { id: 1, title: "Textbook: Introduction to Psychology", price: 45, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, title: "Desk Lamp", price: 15, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, title: "Bicycle", price: 120, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, title: "Coffee Maker", price: 25, image: "/placeholder.svg?height=200&width=200" },
  { id: 5, title: "Laptop Stand", price: 30, image: "/placeholder.svg?height=200&width=200" },
  { id: 6, title: "Wireless Mouse", price: 20, image: "/placeholder.svg?height=200&width=200" },
]

export default function ItemGrid() {
  return (
    <div className="flex-1">
      <h2 className="text-2xl font-semibold mb-4">Items for Sale</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

