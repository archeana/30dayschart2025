"use client";

import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type ChartCardProps = {
    id: number;
    title: string;
    image: string;
    tags: string[];
    description?: string;
};

const ChartCard = ({ id, title, image, tags, description }: ChartCardProps) => {
    return (
        <Link href={`/chart/${id}`} passHref legacyBehavior>
            <Card sx={{ width: "100%", height: "auto", boxShadow: 3, padding: 2, cursor: "pointer" }}>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        {title}
                    </Typography>
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={300}
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "5px",
                        }}
                    />
                    <Typography variant="body2" color="text.secondary">
                        {tags.join(", ") || "No tags available"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                        {description || "No description available"}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ChartCard;
