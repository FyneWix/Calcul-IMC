"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface BMIResultProps {
  bmi: number
  onReset: () => void
}

export default function BMIResult({ bmi, onReset }: BMIResultProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const getBMICategory = (bmi: number) => {
    if (bmi < 16.5) return "Dénutrition"
    if (bmi < 18.5) return "Maigreur"
    if (bmi < 25) return "Poids normal"
    if (bmi < 30) return "Surpoids"
    if (bmi < 35) return "Obésité modérée"
    if (bmi < 40) return "Obésité sévère"
    return "Obésité morbide"
  }

  const category = getBMICategory(bmi)

  const handleSave = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/bmi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bmi, category }),
      })
      if (!response.ok) {
        throw new Error("Failed to save BMI")
      }
      alert("BMI saved successfully!")
    } catch (error) {
      console.error("Error saving BMI:", error)
      alert("Failed to save BMI")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Valeur de l'IMC</h2>
      <p className="text-4xl font-bold mb-2">{bmi}</p>
      <p className="text-xl mb-4">{category}</p>
      <div className="flex justify-center mt-8 space-x-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onReset}
        >
          Recalculer
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSave}
          disabled={isLoading}
        >
          {isLoading ? "Sauvegarde..." : "Sauvegarder"}
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => router.push("/history")}
        >
          Voir l'historique
        </button>
      </div>
    </div>
  )
}

