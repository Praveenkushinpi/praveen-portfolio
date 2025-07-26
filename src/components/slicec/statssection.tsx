"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Threads from "../bits/Backgrounds/Threads/Threads";

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface Repository {
  name: string;
  language: string;
  stargazers_count: number;
  html_url: string;
}

export default function StatsSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [topRepos, setTopRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userResponse = await fetch('https://api.github.com/users/praveenkushinpi');
        const userData: GitHubStats = await userResponse.json();
        const reposResponse = await fetch('https://api.github.com/users/praveenkushinpi/repos?sort=stars&per_page=4');
        const reposData: Repository[] = await reposResponse.json();
        
        setGithubStats(userData);
        setTopRepos(reposData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);


  const yearsOfCoding = githubStats ? 
    new Date().getFullYear() - new Date(githubStats.created_at).getFullYear() : 0;


  const mostUsedLanguage = topRepos.length > 0 ? 
    topRepos.reduce((acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>) : {};

  const topLanguage = Object.keys(mostUsedLanguage).reduce((a, b) => 
    mostUsedLanguage[a] > mostUsedLanguage[b] ? a : b, 'JavaScript'
  );

  return (
    <section className="relative flex min-h-screen w-full items-center justify-between overflow-hidden px-4 sm:px-8 md:px-12 lg:px-24">

      <div className="absolute inset-0 z-0">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="relative z-10 w-full flex flex-col lg:hidden space-y-8 md:space-y-12 py-8">

        <div className="text-center md:text-left">
          <h1 className="font-google-sans-code text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-black">
            Stats<span className="text-red-500">.</span>
          </h1>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 font-google-sans-code mb-6">
            GitHub Overview
          </h2>
          
          {loading ? (
            <div className="space-y-3 font-google-sans-code">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto md:mx-0"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3 font-google-sans-code">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-800 drop-shadow-md">
                <span className="text-black font-semibold">Most Used Language:</span>{" "}
                {topLanguage}
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-800 drop-shadow-md">
                <span className="text-black font-semibold">Total Repositories:</span>{" "}
                {githubStats?.public_repos || 0}
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-800 drop-shadow-md">
                <span className="text-black font-semibold">Followers:</span>{" "}
                {githubStats?.followers || 0}
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-800 drop-shadow-md">
                <span className="text-black font-semibold">Years of Coding:</span>{" "}
                {yearsOfCoding}+
              </p>
            </div>
          )}
        </div>
        <div 
          className="text-center md:text-left"
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => {
            setIsNavHovered(false);
            setHovered(null);
          }}
        >
          <h2 className="text-sm uppercase tracking-widest text-gray-400 font-google-sans-code mb-6">
            Top Repositories
          </h2>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-8 bg-gray-300 rounded w-2/3 mx-auto md:mx-0"></div>
                </div>
              ))}
            </div>
          ) : (
            <ul className="flex flex-col items-center md:items-start space-y-4">
              {topRepos.map((repo, index) => {
                const isActive = hovered === index;
                const isDimmed = isNavHovered && hovered !== index;

                return (
                  <li
                    key={index}
                    onMouseEnter={() => setHovered(index)}
                    onTouchStart={() => setHovered(index)}
                    className={`
                      font-google-sans-code text-lg sm:text-xl md:text-2xl
                      transition-all duration-300 ease-out
                      ${isActive ? "text-black scale-105" : "text-gray-700"}
                      ${isDimmed ? "opacity-70" : ""}
                    `}
                  >
                    <Link href={repo.html_url} target="_blank" className="hover:underline block">
                      <div className="text-center md:text-left">
                        <span className="font-semibold">{repo.name}</span>
                        <div className="text-sm text-gray-500 mt-1">
                          {repo.language} • ⭐ {repo.stargazers_count}
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="hidden lg:flex relative z-10 w-full items-center justify-between">
        
        <div className="text-left max-w-xl flex flex-col justify-center">
          <h1 className="font-google-sans-code text-7xl xl:text-8xl 2xl:text-9xl font-extrabold leading-tight text-black">
            Stats<span className="text-red-500">.</span>
          </h1>

          <div className="mt-10 space-y-4 font-google-sans-code">
            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">
              GitHub Overview
            </h2>
            
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-8 bg-gray-300 rounded w-4/5"></div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <p className="text-2xl xl:text-3xl text-gray-800 drop-shadow-md">
                  <span className="text-black font-semibold">Most Used Language:</span>{" "}
                  {topLanguage}
                </p>
                <p className="text-2xl xl:text-3xl text-gray-800 drop-shadow-md">
                  <span className="text-black font-semibold">Total Repositories:</span>{" "}
                  {githubStats?.public_repos || 0}
                </p>
                <p className="text-2xl xl:text-3xl text-gray-800 drop-shadow-md">
                  <span className="text-black font-semibold">Followers:</span>{" "}
                  {githubStats?.followers || 0}
                </p>
                <p className="text-2xl xl:text-3xl text-gray-800 drop-shadow-md">
                  <span className="text-black font-semibold">Years of Coding:</span>{" "}
                  {yearsOfCoding}+
                </p>
              </>
            )}
          </div>
        </div>
        <div
          className="text-right max-w-sm flex flex-col justify-center"
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => {
            setIsNavHovered(false);
            setHovered(null);
          }}
        >
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-google-sans-code mb-6">
            Top Repositories
          </h2>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse text-right">
                  <div className="h-8 bg-gray-300 rounded ml-auto w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <ul className="flex flex-col items-end transition-all duration-300">
              {topRepos.map((repo, index) => {
                const isActive = hovered === index;
                const isDimmed = isNavHovered && hovered !== index;

                return (
                  <li
                    key={index}
                    onMouseEnter={() => setHovered(index)}
                    className={`
                      font-google-sans-code text-xl xl:text-2xl
                      transition-all duration-300 ease-out
                      ${isActive ? "text-black scale-110" : "text-gray-700"}
                      ${isDimmed ? "translate-x-3 opacity-70" : ""}
                      mb-6
                    `}
                  >
                    <Link href={repo.html_url} target="_blank" className="hover:underline block">
                      <div className="text-right">
                        <span className="font-semibold">{repo.name}</span>
                        <div className="text-sm text-gray-500 mt-1">
                          {repo.language} • ⭐ {repo.stargazers_count}
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}

          <div className="mt-8 text-right">
            <Link 
              href="https://github.com/praveenkushinpi" 
              target="_blank"
              className="text-sm font-google-sans-code text-gray-500 uppercase tracking-wide hover:text-red-500 transition-colors duration-300"
            >
              View Full Profile →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
