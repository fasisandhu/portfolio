/**
 * The Recruiter.AI voice-interview loop, drawn from the shipped implementation:
 * MediaRecorder → WebSocket → Groq whisper-large-v3-turbo → Groq
 * llama-3.1-8b-instant → AWS Polly → back over the socket, with face-api.js
 * proctoring writing violations alongside the transcript.
 *
 * Every label here names something that exists in the repository. If the
 * pipeline changes, this drawing is wrong and must change with it.
 */

type NodeProps = {
  x: number;
  y: number;
  w: number;
  title: string;
  sub: string;
  h?: number;
};

function Node({ x, y, w, title, sub, h = 58 }: NodeProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={5}
        fill="var(--bg-raised)"
        stroke="var(--line-strong)"
        strokeWidth={1}
      />
      <text
        x={x + 14}
        y={y + 24}
        fill="var(--text)"
        fontSize={13}
        fontWeight={500}
        fontFamily="var(--font-sans-var), system-ui, sans-serif"
      >
        {title}
      </text>
      <text
        x={x + 14}
        y={y + 42}
        fill="var(--dim)"
        fontSize={10}
        letterSpacing="0.04em"
        fontFamily="var(--font-mono-var), ui-monospace, monospace"
      >
        {sub}
      </text>
    </g>
  );
}

function Flow({ label, x, y }: { label: string; x: number; y: number }) {
  return (
    <text
      x={x}
      y={y}
      fill="var(--dim)"
      fontSize={10}
      textAnchor="middle"
      letterSpacing="0.08em"
      fontFamily="var(--font-mono-var), ui-monospace, monospace"
    >
      {label}
    </text>
  );
}

export default function InterviewLoop() {
  return (
    <figure className="m-0">
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 1000 318"
          role="img"
          aria-labelledby="loop-title loop-desc"
          className="block h-auto w-full min-w-[52rem]"
        >
          <title id="loop-title">
            Recruiter.AI real-time voice interview pipeline
          </title>
          <desc id="loop-desc">
            Candidate audio is captured by MediaRecorder in the browser and sent over a
            WebSocket to a FastAPI server, transcribed by Groq whisper-large-v3-turbo,
            passed to Groq llama-3.1-8b-instant which generates the next question from a
            pool built off the job description and the candidate résumé, synthesised by
            Amazon Polly, and returned over the same socket for playback. In parallel,
            face-api.js proctoring in the browser writes violations alongside the
            transcript to PostgreSQL, which feeds the automated evaluation.
          </desc>

          <defs>
            <marker
              id="arw"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="var(--line-strong)" strokeWidth={1.4} />
            </marker>
            <marker
              id="arw-accent"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,1 L9,5 L0,9" fill="none" stroke="var(--accent)" strokeWidth={1.4} />
            </marker>
          </defs>

          {/* Client / server boundary */}
          <line
            x1={348}
            y1={8}
            x2={348}
            y2={300}
            stroke="var(--line-strong)"
            strokeWidth={1}
            strokeDasharray="3 5"
          />
          <text
            x={16}
            y={20}
            fill="var(--dim)"
            fontSize={10}
            letterSpacing="0.16em"
            fontFamily="var(--font-mono-var), ui-monospace, monospace"
          >
            BROWSER
          </text>
          <text
            x={366}
            y={20}
            fill="var(--dim)"
            fontSize={10}
            letterSpacing="0.16em"
            fontFamily="var(--font-mono-var), ui-monospace, monospace"
          >
            FASTAPI — WEBSOCKET
          </text>

          {/* Outbound: candidate speech to next question */}
          <Node x={16} y={40} w={232} title="Microphone" sub="MediaRecorder · base64" />
          <Node
            x={384}
            y={40}
            w={252}
            title="whisper-large-v3-turbo"
            sub="Groq · speech → text"
          />
          <Node
            x={700}
            y={40}
            w={284}
            title="llama-3.1-8b-instant"
            sub="question pool · job + résumé"
          />

          <line x1={248} y1={69} x2={378} y2={69} stroke="var(--line-strong)" strokeWidth={1} markerEnd="url(#arw)" />
          <Flow label="audio" x={313} y={61} />
          <line x1={636} y1={69} x2={694} y2={69} stroke="var(--line-strong)" strokeWidth={1} markerEnd="url(#arw)" />
          <Flow label="text" x={665} y={61} />

          {/* Return: synthesised question back to the candidate */}
          <Node x={700} y={140} w={284} title="Amazon Polly" sub="text → speech" />
          <Node x={16} y={140} w={232} title="Audio playback" sub="<audio> · base64" />

          <line x1={842} y1={98} x2={842} y2={134} stroke="var(--line-strong)" strokeWidth={1} markerEnd="url(#arw)" />
          <Flow label="question" x={886} y={122} />

          <path
            className="trace-path"
            d="M694,169 L254,169"
            fill="none"
            stroke="var(--accent)"
            strokeWidth={1.4}
            markerEnd="url(#arw-accent)"
          />
          <text
            x={474}
            y={161}
            fill="var(--accent)"
            fontSize={10}
            textAnchor="middle"
            letterSpacing="0.08em"
            fontFamily="var(--font-mono-var), ui-monospace, monospace"
          >
            spoken question
          </text>

          {/* Loop closure: the candidate answers and the cycle repeats */}
          <path
            d="M132,134 L132,104"
            fill="none"
            stroke="var(--line-strong)"
            strokeWidth={1}
            markerEnd="url(#arw)"
          />
          <text
            x={146}
            y={123}
            fill="var(--dim)"
            fontSize={10}
            letterSpacing="0.08em"
            fontFamily="var(--font-mono-var), ui-monospace, monospace"
          >
            next answer
          </text>

          {/* Proctoring runs alongside, not in the loop */}
          <Node
            x={16}
            y={236}
            w={232}
            h={52}
            title="face-api.js"
            sub="no face · multiple · gaze"
          />
          <Node
            x={384}
            y={236}
            w={252}
            h={52}
            title="PostgreSQL"
            sub="transcript + violations"
          />
          <Node
            x={700}
            y={236}
            w={284}
            h={52}
            title="Automated evaluation"
            sub="scores + written feedback"
          />
          <line x1={248} y1={262} x2={378} y2={262} stroke="var(--line-strong)" strokeWidth={1} markerEnd="url(#arw)" />
          <Flow label="violations" x={313} y={254} />
          <line x1={636} y1={262} x2={694} y2={262} stroke="var(--line-strong)" strokeWidth={1} markerEnd="url(#arw)" />
        </svg>
      </div>
      <figcaption className="mt-4 text-[0.8125rem] leading-relaxed text-muted">
        The interview loop in Recruiter.AI. Every stage names a component that runs in
        the deployed app — the question pool is generated from the job description and
        the candidate&rsquo;s résumé, then each follow-up is conditioned on the transcript
        so far.
      </figcaption>
    </figure>
  );
}
