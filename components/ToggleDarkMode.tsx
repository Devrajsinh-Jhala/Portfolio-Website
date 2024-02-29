"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      className=""
      onClick={() => toggleTheme()}
      variant={"outline"}
      size={"icon"}
    >
      {isDarkMode === true ? <Moon /> : <Sun />}
    </Button>
  );
}
