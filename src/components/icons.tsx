import type { IconBaseProps } from "react-icons";
import {
  LuBadgeCheck,
  LuBath,
  LuCheck,
  LuClock,
  LuExpand,
  LuFileText,
  LuHammer,
  LuHandshake,
  LuHouse,
  LuMail,
  LuMapPin,
  LuPhone,
  LuShieldCheck,
  LuSparkles,
  LuWarehouse,
  LuWrench,
} from "react-icons/lu";

/**
 * The icon set the design system draws from (Lucide, via react-icons).
 * Content data references these by key so the copy stays free of markup.
 */
export const icons = {
  house: LuHouse,
  hammer: LuHammer,
  expand: LuExpand,
  bath: LuBath,
  warehouse: LuWarehouse,
  wrench: LuWrench,
  handshake: LuHandshake,
  "badge-check": LuBadgeCheck,
  "shield-check": LuShieldCheck,
  sparkles: LuSparkles,
  check: LuCheck,
  phone: LuPhone,
  mail: LuMail,
  "map-pin": LuMapPin,
  clock: LuClock,
  "file-text": LuFileText,
} as const;

export type IconKey = keyof typeof icons;

type IconProps = IconBaseProps & {
  name: IconKey;
  /** Stroke weight, matching the design system's line icons. */
  weight?: number;
};

export function Icon({ name, size = 24, weight = 1.6, color = "var(--ink)", ...rest }: IconProps) {
  const Glyph = icons[name];
  return (
    <Glyph
      size={size}
      color={color}
      strokeWidth={weight}
      aria-hidden="true"
      focusable="false"
      {...rest}
    />
  );
}
