'use client';

import { useEffect, useState } from 'react';

interface StatusCheckerProps {
    url: string;
}

export default function StatusChecker({ url }: StatusCheckerProps) {
    const [status, setStatus] = useState<'online' | 'offline' | 'checking'>('checking');

    useEffect(() => {
        const checkStatus = async () => {
            try {
                const _response = await fetch(url, {
                    method: 'HEAD',
                    mode: 'no-cors',
                });
                console.log(_response);

                setStatus('online');
            } catch (error) {
                setStatus('offline');
                console.log(error);
            }
        };

        checkStatus();


        const interval = setInterval(checkStatus, 60000);

        return () => clearInterval(interval);
    }, [url]);

    return (
        <div>
            <p>
                {" "}
                <span title={status}>
                    {status === 'online' && ' 🟢'}
                    {status === 'offline' && ' 🔴'}
                    {status === 'checking' && ' ⚪'}
                </span>
            </p>
        </div>
    );
}