// https://github.com/tfutada/zenn-nextjs/blob/d65d96e3e50df5cfeade519a6e4c5fa4f8ad8e9a/app/options.ts#L6

import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }