import { Handle, Position } from "reactflow";

export default function ResultNode({ data }) {
    return (
        <div style={{ width:300, padding: 15, background: "#e8f5e9", borderRadius: 10 }}>
            <h3>AI Response</h3>
            <p>{data.response || "Waiting for response..."}</p>
            <Handle type="target" position={Position.Left} />
        </div>
    );
}
