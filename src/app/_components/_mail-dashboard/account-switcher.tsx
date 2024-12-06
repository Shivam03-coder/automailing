// "use client";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
// } from "@/components/ui/select";
// import { toast } from "@/hooks/use-toast";
// import { api } from "@/trpc/react";
// import { Mail, Plus } from "lucide-react";
// import { useLocalStorage } from "usehooks-ts";

// const AccountSwitcher = () => {
//   const { data: accounts } = api.mails.getAccounts.useQuery();

//   const [AccountId, set] = useLocalStorage("accountId", "");

//   if (!accounts) {
//     return null;
//   }

//   const handleAccounts = (value: string) => {
//     toast({
//       title: `Account switched to ${value}`,
//       className: "bg-green-200 text-black",
//     });
//     set(value); // Set the account ID in local storage
//   };

//   return (
//     <Select onValueChange={handleAccounts}>
//       <SelectTrigger className="border-none bg-primary text-secondary">
//         <div className="flex items-center gap-2">
//           <Mail size={20} />
//           <Plus size={16} />
//         </div>
//       </SelectTrigger>
//       <SelectContent className="bg-secondary text-primary">
//         <SelectGroup>
//           <SelectLabel>Accounts</SelectLabel>
//           <SelectItem value="shaivam850anand@gmail.com">
//             shaivam850anand@gmail.com
//           </SelectItem>
//           <SelectItem value="satyam013@gmail.com">
//             satyam013@gmail.com
//           </SelectItem>
//           {accounts.map((acc) => (
//             <SelectItem key={acc.id} value={acc.id}>
//               {acc.emailAddress}
//             </SelectItem>
//           ))}
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   );
// };

// export default AccountSwitcher;
