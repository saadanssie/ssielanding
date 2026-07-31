import NextAuth, { AuthOptions } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions: AuthOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
      authorization: {
        params: {
          scope: [
            "openid",
            "profile",
            "email",
            "offline_access",
            `api://${process.env.AZURE_AD_CLIENT_ID}/App.read`,
            `api://${process.env.AZURE_AD_CLIENT_ID}/App.write`,
          ].join(" "),
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  session: {
    strategy: "jwt",
  },
  // callbacks: {
  //   async signIn({ profile }: any) {
  //     const roles = profile?.roles || [];
  //     // Allow only Admin and Sales
  //     if (
  //       ["MerchantAdmin", "Executive", "Manager", "Merchant"].includes(roles[0])
  //     ) {
  //       return true;
  //     }

  //     // Block others
  //     return false;
  //   },
  //   async jwt({ token, account, profile }: any) {
  //     if (account && profile) {
  //       token.accessToken = account.access_token;

  //       // Email
  //       token.email = profile.preferred_username || profile.email || null;

  //       // Name
  //       token.name = profile.name || null;

  //       // Roles (App roles from Azure)
  //       token.roles = profile.roles || [];
  //     }

  //     return token;
  //   },

  //   async session({ session, token }) {
  //     session.accessToken = token.accessToken as string;

  //     // Expose to frontend
  //     session.user.email = token.email as string;
  //     session.user.name = token.name as string;

  //     // Custom field
  //     (session as any).roles = token.roles || [];

  //     return session;
  //   },
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
