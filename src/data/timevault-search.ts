import { documents, learningTracks } from "./timevault";
import { videos } from "./videos";

export function searchKnowledge(query: string) {
  const q = query.toLowerCase();

  return {
    documents: documents.filter(
      (d) =>
        d.title.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q)
    ),

    tracks: learningTracks.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.level.toLowerCase().includes(q)
    ),

    videos: videos.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q)
    ),
  };
}
