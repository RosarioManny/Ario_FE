// decoratorData.jsx
import { 
  _Decorator_PenNib, 
  _Decorator_Lips, 
  _Decorator_Paperball, 
  _Decorator_Ratears, 
  _Decorator_Samosa, 
  _Decorator_Smoke_and_Fire 
} from "../../../assets/SVGs/Decorator_svgs"

export const decoratorListData = [
  {
    name: "Smoke & Fire",
    component: _Decorator_Smoke_and_Fire,
    aspectRatio: 82 / 164, // 0.5 - very tall
    optimalSize: 55,
    strokeWidth: 10
  },
  {
    name: "Lips",
    component: _Decorator_Lips,
    aspectRatio: 164 / 89, // 1.84 - very wide
    optimalSize: 36,
    strokeWidth: 8
  },
  {
    name: "Pen Nib",
    component: _Decorator_PenNib,
    aspectRatio: 89 / 86, // 1.03 - nearly square
    optimalSize: 50,
    strokeWidth: 6
  },
  {
    name: "Paperball",
    component: _Decorator_Paperball,
    aspectRatio: 89 / 113, // 0.79 - slightly tall
    optimalSize: 45,
    strokeWidth: 8
  },
  {
    name: "Ratears",
    component: _Decorator_Ratears,
    aspectRatio: 89 / 145, // 0.61 - tall
    optimalSize: 60,
    strokeWidth: 8
  },
  {
    name: "Samosa",
    component: _Decorator_Samosa,
    aspectRatio: 89 / 122, // 0.73 - tall
    optimalSize: 50,
    strokeWidth: 8
  },
]