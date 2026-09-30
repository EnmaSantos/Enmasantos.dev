# Portfolio content evidence

Reviewed September 30, 2026. Repository inspection establishes implemented source and documentation at the listed revisions; it does not prove authorship of every line or that every deployed feature works for every user.

| Project | Reviewed source | Public claim and limits |
| --- | --- | --- |
| VitalityVista | [`main` at `92b0c66`](https://github.com/EnmaSantos/vitality_vista/tree/92b0c669446bda776c32da8cfac1f0e2c1f26f2e) | README documents dashboards, workout and nutrition workflows, auth, PostgreSQL, and import review. Public screenshot uses representative demo data. Camera and import test files were inspected in earlier resume research; this task did not rerun that project's tests. [Date correction](https://github.com/EnmaSantos/vitality_vista/commit/cd2d78a8ff43dc2c3d8588f0147269a0a4d6680a) supports the code-change description, not a claimed discovery story. Enmanuel is the only consistent user, per his September 24 clarification. |
| VibeMatch | [`main` at `28aa053`](https://github.com/EnmaSantos/vibematch/tree/28aa053d58237f1b88e23548c5607abedd26a01b) and [first Figma design pass](https://www.figma.com/design/kJktYujehpxaF0fxFif8ia) | Enmanuel confirmed on September 30 that he created or directed the linked mobile frames and approved their use in the case study. They are early concepts, not screenshots of the current app. `SwipeDeck.tsx`, movie-detail UI, server actions, Supabase session logic, and TMDB/OMDb modules support the implemented interface claims. README describes an older mock phase, so use inspected source for implemented features. The live homepage returned HTTP 200 on September 30; authenticated multi-user flows were not tested. No formal user interviews, usability tests, or measured UX outcomes were reported. The project-card image is explicitly an illustration. |
| Kairo | [`main` at `0994380`](https://github.com/EnmaSantos/kairo/tree/09943805bf821943723990ec0d5e464409af4600) | README and source document browser recording, journal views, FastAPI, Whisper, emotion analysis, and embeddings/FAISS. The project is a local demo. Do not claim a public live deployment, a 1,000+ entry count, or PostgreSQL as the demo's actual database. |
| Coaching Audits / CoachLens | [Public CoachLens `main` at `ef927aa`](https://github.com/EnmaSantos/CoachLens/tree/ef927aa31e763391237e9e1f3a70e8d92f95b02d) | The production system supports 70+ coaches and 1,500+ students, confirmed by Enmanuel on September 24, 2026. The public repository is a sanitized mirror with mock data, not the production repository. Keep this audience separate from course provisioning. |
| Course provisioning | Resume source and Enmanuel's professional experience | Approximately 375 courses per semester and 25 staff members are about the Trello setup workflow, not Coaching Audits. |
| Madison Fire Department | Current resume source | This was a volunteer team project. Describe database and inventory contributions without claiming sole ownership of the complete system. |

## Links checked

- [VitalityVista public deployment](https://vitalityvista.enmasantos.dev/) — HTTP 200 on September 30, 2026.
- [VibeMatch public homepage](https://vibematch.enmasantos.dev/) — HTTP 200 on September 30, 2026.
- [Portfolio domain](https://enmasantos.dev/) — GitHub Pages active before this revision.
- [LinkedIn](https://www.linkedin.com/in/enmsan/) and [GitHub](https://github.com/EnmaSantos) use the canonical resume destinations.

HTTP responses confirm that a page is served, not that authenticated flows work end to end.

## Follow-up evidence

- Replace the VibeMatch illustration with an actual current interface screenshot or a short demo when one can be captured safely.
- Ask Enmanuel to confirm the observed symptom, investigation, and verification steps for a first-person VitalityVista debugging story.
- Reconfirm public sharing boundaries before expanding the professional-work case study.
- Refresh project status and links when the underlying apps change.
