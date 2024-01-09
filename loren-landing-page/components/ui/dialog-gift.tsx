"use client"

import Image from "next/image";

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import X from "../../public/images/X.png";

import { cn } from "@/lib/utils"

const DialogGift = DialogPrimitive.Root

const DialogTriggerGift = DialogPrimitive.Trigger

const DialogPortalGift = DialogPrimitive.Portal

const DialogCloseGift = DialogPrimitive.Close

const DialogOverlayGift = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlayGift.displayName = DialogPrimitive.Overlay.displayName

const DialogContentGift = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortalGift>
    <DialogOverlayGift />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] bg-giftPopup bg-cover w-[500px] h-[415px] shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-1 top-8 rounded-sm transition-opacity disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
      <Image
          src={X}
          alt="x"
          className="w-[30px] h-[28px]"
        />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortalGift>
))
DialogContentGift.displayName = DialogPrimitive.Content.displayName

const DialogHeaderGift = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeaderGift.displayName = "DialogHeaderGift"

const DialogFooterGift = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooterGift.displayName = "DialogFooterGift"

const DialogTitleGift = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitleGift.displayName = DialogPrimitive.Title.displayName

const DialogDescriptionGift = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescriptionGift.displayName = DialogPrimitive.Description.displayName

export {
  DialogGift,
  DialogPortalGift,
  DialogOverlayGift,
  DialogCloseGift,
  DialogTriggerGift,
  DialogContentGift,
  DialogHeaderGift,
  DialogFooterGift,
  DialogTitleGift,
  DialogDescriptionGift,
}
