// import Image from 'next/image'
// import { notFound } from 'next/navigation'

// interface Product {
//   id: number
//   title: string
//   price: number
//   description: string
//   image: string
//   category: string
// }

// async function getProduct(id: string): Promise<Product | null> {
//   try {
//     const res = await fetch(`http://localhost:3000/api/tours/`)
    
//     if (!res.ok) {
//       if (res.status === 404) return null
//       throw new Error('خطا در دریافت اطلاعات محصول')
//     }

//     return res.json()
//   } catch (error) {
//     console.error('Error:', error)
//     throw error
//   }
// }

// export default async function ProductPage({
//   params: { id }
// }: {
//   params: { id: string }
// }) {
//   const product = await getProduct(id)
  
//   if (!product) {
//     notFound()
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="md:flex">
//           <div className="md:flex-shrink-0">
//             <Image
//               src={product.image}
//               alt={product.title}
//               width={400}
//               height={300}
//               className="h-full w-full object-cover md:w-48"
//             />
//           </div>
//           <div className="p-8">
//             <div className="text-sm text-blue-600 font-semibold">
//               {product.category}
//             </div>
//             <h1 className="mt-2 text-2xl font-bold text-gray-900">
//               {product.title}
//             </h1>
//             <p className="mt-4 text-gray-600">
//               {product.description}
//             </p>
//             <div className="mt-8">
//               <span className="text-xl font-bold text-gray-900">
//                 {product.price.toLocaleString()} تومان
//               </span>
//               <button className="mr-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                 افزودن به سبد خرید
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }