"use client";

import { useState, useEffect } from 'react';
import type { Experience } from "@/models/Experiences";
import ExperienceProp from '@/components/ExperienceProp';

export default function ExperiencePage() {
    const [ experiences, setExperiences ] = useState<Experience>([]);
    const [ isLoading, setIsLoading ] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch ('/api/experience').then(res => res.json()).then(data => data.experiences);
                setExperiences(data);
            } catch (err) {
                console.error(err)
            } setIsLoading(false);
        };
        fetchData();
    }, []);

    if (isLoading) return <p className='font-bold p-4 flex flex-col items-center justify-center'>Loading...</p>
    return (
        <main>
            <p className='font-bold p-4 flex flex-col items-center'>Experiences</p>
            <div className='flex flex-wrap gap-4 justify-center'>
                {experiences.map((experience) => (
                    <ExperienceProp key={experience._id} experience={experience} />
                ))}
            </div>
        </main>
    );
}