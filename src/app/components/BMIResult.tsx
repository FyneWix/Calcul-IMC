interface BMIResultProps {
  bmi: number
  onReset: () => void
}

export default function BMIResult({ bmi, onReset }: BMIResultProps) {
  const getBMICategory = (bmi: number) => {
    if (bmi < 16.5) return "Undernutrition"
    if (bmi < 18.5) return "Thinness"
    if (bmi < 25) return "Normal weight"
    if (bmi < 30) return "Overweight"
    if (bmi < 35) return "Moderate obesity"
    if (bmi < 40) return "Severe obesity"
    return "Morbid obesity"
  }

  const category = getBMICategory(bmi)

  return (
    <div className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Your BMI Result</h2>
      <p className="text-4xl font-bold mb-2">{bmi}</p>
      <p className="text-xl mb-4">{category}</p>
      <div className="flex justify-center mt-8">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onReset}
        >
          Calculate Again
        </button>
      </div>
    </div>
  )
}

