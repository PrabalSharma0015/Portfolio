import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Prabal Sharma",
  description: "The requested spatial coordinate or route does not exist.",
};

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-24 select-none">
      <Container className="max-w-2xl text-center space-y-6">
        <TechnicalLabel className="justify-center">ERROR // 404_ROUTE_NOT_FOUND</TechnicalLabel>
        
        <h1 className="text-display uppercase tracking-tight text-foreground">
          COORDINATE UNRESOLVED
        </h1>
        
        <p className="text-body-lg text-foreground-secondary leading-relaxed">
          The spatial route or portfolio case study you requested could not be located within the system matrix.
        </p>

        <div className="pt-4">
          <Link href="/">
            <Button variant="primary">RETURN TO SYSTEM START →</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
