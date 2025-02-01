"use client"

import { useEffect, useState } from "react"

export default function HistoryPage() {
  interface Record {
    id: string;
    createdAt: string;
    bmi: number;
    category: string;
  }

  const [records, setRecords] = useState<Record[]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/bmi") // Récupère les données en temps réel
      const data = await res.json()
      setRecords(data) // Met à jour l'état
    }

    fetchData() // Appel initial

    // Optionnel : Auto-refresh toutes les 5 secondes
    // const interval = setInterval(fetchData, 5000)
    // return () => clearInterval(interval) // Nettoyage
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Historique des IMC</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IMC</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {records.map((record) => (
              <tr key={record.id}>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(record.createdAt).toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.bmi.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
