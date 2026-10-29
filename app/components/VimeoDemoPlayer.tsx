"use client";

import Player from "@vimeo/player";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type VimeoDemoPlayerProps = {
  autoplay?: boolean;
};

export default function VimeoDemoPlayer({ autoplay = false }: VimeoDemoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    if (!iframeRef.current) return;
    const player = new Player(iframeRef.current);
    playerRef.current = player;
    const showMergeVistaEndScreen = () => setEnded(true);
    player.on("ended", showMergeVistaEndScreen);
    return () => {
      player.off("ended", showMergeVistaEndScreen);
      playerRef.current = null;
    };
  }, []);

  const replay = async () => {
    setEnded(false);
    await playerRef.current?.setCurrentTime(0);
    await playerRef.current?.play();
  };

  return (
    <div className="relative h-full w-full bg-zinc-950">
      <iframe
        ref={iframeRef}
        className="h-full w-full"
        src={`https://player.vimeo.com/video/1240902482?h=629b13653c&autoplay=${autoplay ? "1" : "0"}&title=0&byline=0&portrait=0&dnt=1`}
        title="MergeVista product demo"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      {ended && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 px-6 text-center text-white">
          <p className="text-xs font-semibold tracking-[0.14em] text-zinc-400">
            MergeVista PRODUCT OVERVIEW
          </p>
          <h3 className="mt-4 max-w-2xl text-2xl font-medium tracking-[-0.03em] sm:text-4xl">
            Ready to connect strategy directly to execution?
          </h3>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={replay}
              className="inline-flex h-11 items-center gap-2 rounded-md border border-zinc-700 px-5 text-sm font-medium transition hover:bg-zinc-900"
            >
              <RotateCcw className="size-4" />
              Replay
            </button>
            <Link
              href="/book-a-demo"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-100"
            >
              Book a guided demo
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
