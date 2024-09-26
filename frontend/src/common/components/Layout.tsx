import Sidebar from './Sidebar/Sidebar';

interface ChildrenProps {
    children: any
}

// export default function Layout({ children }: ChildrenProps) {
//     return (
//       <>
//           <Sidebar />
//         <main>
//           {children}
//         </main>
//       </>
//     )
//   }


 export default function Layout({ children }) {
   return (
     <>
        <Sidebar />
       <main>{children}</main>
     </>
   )
 }