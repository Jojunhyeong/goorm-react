// components/ProfileCard.jsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card"; // 경로 확인: shadcn이면 보통 /ui/card

// ProfileCard.jsx
export default function ProfileCard({ name, profile, intro }) {
  return (
    <Card className="h-full">
      <CardHeader className="border-b">
        <CardTitle className="text-lg">{name}</CardTitle>
        {intro && <CardDescription>{intro}</CardDescription>}
      </CardHeader>
      <CardContent className="py-6 flex items-center justify-center">
        <img src={profile} alt={name} className="w-32 h-32 object-cover rounded-full" />
      </CardContent>
    </Card>
  );
}
