import CategoryItem from "./CategoryItem"
import { categoryDetails } from "./Data"

const Categories = () => {
  return (
    <div className="my-6 px-4 md:px-[50px] flex md:flex-row flex-col justify-center items-center gap-5">
      {categoryDetails.map((c)=>(
        <CategoryItem key={c.id} c={c}/>
      ))}
    </div>
  )
}

export default Categories
