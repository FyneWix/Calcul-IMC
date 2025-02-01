"use client"

import { useState } from "react"
import BMIResult from "./BMIResult"

export default function BMICalculator() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBMI] = useState<number | null>(null)
  const [error, setError] = useState("")

  const calculateBMI = () => {
    setError("")
    const weightNum = Number.parseFloat(weight)
    const heightNum = Number.parseInt(height)

    if (weightNum <= 0 || heightNum <= 0) {
      setError("Weight and height must be positive numbers.")
      return
    }

    if (weightNum > 0 && heightNum > 0) {
      // Convert height from cm to meters for BMI calculation
      const heightInMeters = heightNum / 100
      const bmiValue = weightNum / (heightInMeters * heightInMeters)
      setBMI(Number.parseFloat(bmiValue.toFixed(1)))
    }
  }

  return (
    <div className="w-full max-w-md">
      {bmi === null ? (
        <div className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="poids">
                Poids (kg)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="weight"
                type="number"
                step="0.1"
                min="0"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taille">
                Taille (cm)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="height"
                type="number"
                step="1"
                min="0"
                placeholder="Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="flex items-center justify-center">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={calculateBMI}
            >
              Calculer
            </button>
          </div>
        </div>
      ) : (
        <BMIResult bmi={bmi} onReset={() => setBMI(null)} />
      )}
    </div>
  )
}

