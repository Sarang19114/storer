"use client";

import { useState, useCallback, useRef } from "react";

/* ─── Upload Card ─── */
function UploadCard() {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState<{ name: string; size: string; icon: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const iconFor = (name: string) => {
    const ext = name.split(".").pop()?.toLowerCase() ?? "";
    if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(ext)) return "image";
    if (["mp4", "mov", "avi", "mkv"].includes(ext)) return "video_file";
    if (["mp3", "wav", "aac"].includes(ext)) return "audio_file";
    if (["pdf"].includes(ext)) return "picture_as_pdf";
    if (["zip", "rar", "7z"].includes(ext)) return "folder_zip";
    return "description";
  };

  const addFiles = useCallback((rawFiles: FileList | null) => {
    if (!rawFiles) return;
    const newFiles = Array.from(rawFiles).map((f) => ({
      name: f.name,
      size: formatSize(f.size),
      icon: iconFor(f.name),
    }));
    setFiles((prev) => [...prev, ...newFiles].slice(0, 6));
  }, []);

  return (
    <div className="h-full bg-white border border-slate-200 card-shadow rounded-2xl p-6 flex flex-col group overflow-hidden">
      <div>
        <h3 className="text-2xl font-bold mb-1 text-slate-900">Upload any file</h3>
        <p className="text-slate-500 text-sm">PDFs, videos, images, archives — anything goes.</p>
      </div>

      {/* Drop zone */}
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          addFiles(e.dataTransfer.files);
        }}
        className={`mt-4 flex-1 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-200 min-h-[120px] ${
          dragging
            ? "border-primary bg-primary/10 scale-[0.99]"
            : "border-slate-200 bg-slate-50 hover:border-primary/40 hover:bg-primary/5"
        }`}
      >
        <input ref={inputRef} type="file" multiple className="hidden" onChange={(e) => addFiles(e.target.files)} />

        {files.length === 0 ? (
          <div className="text-center py-6 px-4">
            {/* Cloud upload illustration */}
            <div className="relative mx-auto w-20 h-16 mb-3">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-10 bg-primary/10 rounded-full"></div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary/20 rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-4xl">cloud_upload</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-700">
              {dragging ? "Drop to upload" : "Click or drag files here"}
            </p>
            <p className="text-xs text-slate-400 mt-1">Supports all file types · Max 50MB</p>
            <div className="flex items-center justify-center gap-2 mt-3">
              {["PDF", "JPG", "MP4", "ZIP", "DOC"].map((ext) => (
                <span key={ext} className="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 rounded-full text-slate-500">
                  {ext}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full p-3 space-y-1.5">
            {files.map((f, i) => (
              <div key={i} className="flex items-center gap-2 bg-white border border-slate-100 rounded-lg px-3 py-2 shadow-sm">
                <span className="material-symbols-outlined text-primary text-base">{f.icon}</span>
                <span className="text-xs font-medium text-slate-700 truncate flex-1">{f.name}</span>
                <span className="text-[10px] text-slate-400 shrink-0">{f.size}</span>
                <span className="material-symbols-outlined text-emerald-500 text-base">check_circle</span>
              </div>
            ))}
            <button
              onClick={(e) => { e.stopPropagation(); setFiles([]); }}
              className="text-[11px] text-slate-400 hover:text-red-400 transition-colors mt-1 w-full text-center"
            >
              Clear all
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Share Card ─── */
function ShareCard() {
  const [copied, setCopied] = useState(false);
  const [linkVisible, setLinkVisible] = useState(false);
  const shareUrl = "https://storer.app/s/xK9mZ2pQ";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full bg-white border border-slate-200 card-shadow rounded-2xl p-5 overflow-hidden flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Instant Sharing</h3>
          <p className="text-slate-500 text-sm mt-0.5">Share links with passwords and expiry dates.</p>
        </div>
        <div className="bg-primary/10 p-3 rounded-xl shrink-0">
          <span className="material-symbols-outlined text-primary text-2xl">share</span>
        </div>
      </div>

      {/* File row */}
      <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-primary text-lg">description</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-800 truncate">Q4-Report-Final.pdf</p>
          <p className="text-xs text-slate-400">2.4 MB · PDF</p>
        </div>
        <button
          onClick={() => setLinkVisible(true)}
          className="shrink-0 text-xs font-bold text-white bg-primary hover:bg-primary/90 px-3 py-1.5 rounded-lg transition-all"
        >
          Share
        </button>
      </div>

      {/* Generated link */}
      <div className={`transition-all duration-300 ${linkVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}>
        <div className="flex items-center gap-2 bg-slate-900 rounded-xl px-3 py-2">
          <span className="material-symbols-outlined text-emerald-400 text-sm">link</span>
          <span className="text-xs text-slate-300 flex-1 truncate font-mono">{shareUrl}</span>
          <button
            onClick={handleCopy}
            className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-lg transition-all ${
              copied ? "bg-emerald-500 text-white" : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Search Card ─── */
function SearchCard() {
  const results = [
    { name: "Design Brief.pdf", type: "PDF", icon: "picture_as_pdf", color: "text-red-400" },
    { name: "hero-banner.png", type: "PNG", icon: "image", color: "text-blue-400" },
    { name: "promo-video.mp4", type: "MP4", icon: "video_file", color: "text-purple-400" },
  ];

  return (
    <div className="h-full bg-white border border-slate-200 card-shadow rounded-2xl p-5 flex flex-col gap-3">
      <span className="material-symbols-outlined text-primary text-2xl">search</span>
      <div>
        <h3 className="font-bold text-slate-900">Smart Search</h3>
        <p className="text-xs text-slate-500 mb-3">Find files by name or content.</p>
      </div>
      {/* Mock search input */}
      <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-1.5 bg-slate-50">
        <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
        <span className="text-xs text-slate-400">Search &quot;brief&quot;</span>
        <span className="ml-auto h-3 w-0.5 bg-primary animate-pulse"></span>
      </div>
      <div className="space-y-1.5">
        {results.map((r, i) => (
          <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5 border border-slate-100 hover:border-primary/30 transition-colors">
            <span className={`material-symbols-outlined text-sm ${r.color}`}>{r.icon}</span>
            <span className="text-[11px] font-medium text-slate-700 truncate flex-1">{r.name}</span>
            <span className="text-[10px] text-slate-400">{r.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Management Card ─── */
function ManagementCard() {
  const actions = [
    { icon: "drive_file_rename_outline", label: "Rename", color: "bg-blue-50 text-blue-500" },
    { icon: "share", label: "Share", color: "bg-indigo-50 text-indigo-500" },
    { icon: "download", label: "Download", color: "bg-emerald-50 text-emerald-500" },
    { icon: "delete", label: "Delete", color: "bg-red-50 text-red-400" },
  ];

  return (
    <div className="h-full bg-white border border-slate-200 card-shadow rounded-2xl p-5 flex flex-col gap-3">
      <span className="material-symbols-outlined text-primary text-2xl">edit_document</span>
      <div>
        <h3 className="font-bold text-slate-900">Management</h3>
        <p className="text-xs text-slate-500 mb-2">Quick batch actions.</p>
      </div>
      {/* File row */}
      <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-2.5 py-2 border border-slate-100">
        <span className="material-symbols-outlined text-primary text-sm">description</span>
        <span className="text-xs font-medium text-slate-700 flex-1 truncate">Report-2024.pdf</span>
      </div>
      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-1.5">
        {actions.map((a) => (
          <button key={a.label} className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[11px] font-semibold transition-all hover:scale-105 ${a.color}`}>
            <span className="material-symbols-outlined text-sm">{a.icon}</span>
            {a.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Storage Metrics Card ─── */
function StorageCard() {
  const bars = [
    { pct: 33, label: "Mon" },
    { pct: 50, label: "Tue" },
    { pct: 80, label: "Wed" },
    { pct: 65, label: "Thu" },
    { pct: 40, label: "Fri" },
    { pct: 55, label: "Sat" },
    { pct: 75, label: "Sun" },
  ];

  return (
    <div className="h-full bg-white border border-slate-200 card-shadow rounded-2xl p-5 flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Storage Metrics</h3>
          <p className="text-xs text-slate-500">Real-time usage insights</p>
        </div>
        <span className="material-symbols-outlined text-primary">analytics</span>
      </div>
      {/* Stats row */}
      <div className="flex gap-3 mt-1">
        <div className="flex-1 bg-slate-50 rounded-xl p-2.5 border border-slate-100">
          <p className="text-[10px] text-slate-400">Used</p>
          <p className="text-base font-black text-slate-900">1.8 <span className="text-xs font-normal text-slate-400">GB</span></p>
        </div>
        <div className="flex-1 bg-slate-50 rounded-xl p-2.5 border border-slate-100">
          <p className="text-[10px] text-slate-400">Files</p>
          <p className="text-base font-black text-slate-900">847</p>
        </div>
        <div className="flex-1 bg-amber-50 rounded-xl p-2.5 border border-amber-100">
          <p className="text-[10px] text-amber-600">Free</p>
          <p className="text-base font-black text-amber-700">200 <span className="text-xs font-normal text-amber-500">MB</span></p>
        </div>
      </div>
      {/* Bar chart with value labels */}
      <div className="flex items-end gap-1.5 flex-1 mt-1 min-h-0">
        {bars.map((b) => (
          <div key={b.label} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
            <span className="text-[9px] font-semibold text-primary">{b.pct}%</span>
            <div
              className="w-full rounded-md bg-primary transition-all"
              style={{ height: `${b.pct}%`, opacity: 0.3 + (b.pct / 100) * 0.7 }}
            />
            <span className="text-[9px] text-slate-400">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Secure Access Card ─── */
function SecureCard() {
  const [step, setStep] = useState(0);

  return (
    <div className="h-full bg-white border border-slate-200 card-shadow rounded-2xl p-6 flex flex-col gap-4 overflow-hidden">
      <div className="flex items-center gap-4">
        <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl shrink-0">
          <span className="material-symbols-outlined text-2xl">security</span>
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Secure Access</h3>
          <p className="text-sm text-slate-500">Multi-factor &amp; OTP protection.</p>
        </div>
      </div>

      {/* OTP illustration */}
      <div className="bg-slate-900 rounded-2xl p-4 flex flex-col items-center gap-3 flex-1">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-emerald-400 text-sm">check</span>
          </div>
          <span className="text-xs font-semibold text-slate-300">OTP sent to storer@gmail.com</span>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className={`w-8 h-9 rounded-lg flex items-center justify-center text-sm font-black transition-all duration-200 ${
                i <= step
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white/10 text-slate-500"
              }`}
            >
              {i <= step ? "•" : ""}
            </div>
          ))}
        </div>
        <button
          onClick={() => setStep((s) => s < 6 ? s + 1 : 0)}
          className="text-[11px] text-primary hover:text-primary/80 font-semibold transition-colors"
        >
          {step < 6 ? "► Enter digit" : "✓ Authenticated — reset"}
        </button>
      </div>
    </div>
  );
}

/* ─── Main Export ─── */
export default function BentoFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[240px_300px_280px] gap-5">
      {/* Upload: col 1-2, row 1-2 */}
      <div className="md:col-span-2 md:row-span-2 h-full">
        <UploadCard />
      </div>
      {/* Share: col 3-4, row 1 */}
      <div className="md:col-span-2 h-full">
        <ShareCard />
      </div>
      {/* Search: col 3, row 2 */}
      <div className="h-full">
        <SearchCard />
      </div>
      {/* Management: col 4, row 2 */}
      <div className="h-full">
        <ManagementCard />
      </div>
      {/* Storage: col 1-2, row 3 */}
      <div className="md:col-span-2 h-full">
        <StorageCard />
      </div>
      {/* Secure: col 3-4, row 3 */}
      <div className="md:col-span-2 h-full">
        <SecureCard />
      </div>
    </div>
  );
}
