import { Handle, Position } from "reactflow";

export default function InputNode({ data }) {
    return (
        <div
            style={{
                padding: 16,
                background: "#e3f2fd",
                borderRadius: 12,
                width: 250
            }}
            onMouseDownCapture={(e) => e.stopPropagation()}
        >
            <h3>Prompt</h3>

            <textarea
                value={data.prompt}
                onChange={(e) => data.setPrompt(e.target.value)}
                placeholder="Type your prompt..."
                rows={4}
                style={{ width: "90%" }}
            />

            <Handle type="source" position={Position.Right} />
        </div>
    );
}
