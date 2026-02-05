// RESTful 风格示例
export function GET(request) {
  // const { id } = request.params;
  // return new Response('Hello from Iga!');
  return Response.json({
    message: 'Hello from Iga!',
  });
}

export function POST(request) {
  return Response.json({
    message: 'Hello, POST request received!',
    timestamp: Date.now()
  });
}
