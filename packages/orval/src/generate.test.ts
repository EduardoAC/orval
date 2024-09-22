import { describe, it, expect, vi, beforeEach } from 'vitest';
import { generate } from '../src/index'; // Adjust according to your project structure
// import fs from 'fs';
// import path from 'path';

// // Mock fs and path modules in Vitest
// vi.mock('fs');
// vi.mock('path');

describe('generate function tests', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
  });

  it('should generate a client from a valid OpenAPI spec', async () => {
    // Mock a valid OpenAPI spec
    const mockOpenApiSpec = {
      openapi: '3.0.0',
      info: {
        title: 'Sample API',
        version: '1.0.0',
      },
      paths: {},
    };

    // Mock fs.readFileSync to return the OpenAPI spec as a JSON string
    // vi.spyOn(fs, 'readFileSync').mockReturnValue(
    //   JSON.stringify(mockOpenApiSpec),
    // );

    // Mock path.resolve to simulate file path resolution
    // vi.spyOn(path, 'resolve').mockImplementation((...args) => args.join('/'));

    // Mock the output directory path
    const outputDir = 'output/path';

    // Call the generate function with mocked inputs
    const result = await generate({
      output: {
        // mode: 'tags-split',
        target: './src/petstore.ts',
        schemas: './src/model',
        // workspace: 'src/api',
        //   target: 'services',
        //   schemas: 'models',
        //   client: 'react-query',
      },
      input: {
        target: './src/petstore.yaml',
      },
    });
    // expect(fs.readFileSync).toHaveBeenCalledWith(
    //   './path/to/openapi.yaml',
    //   'utf-8',
    // );
    expect(result).toBeUndefined();
    // expect(fs.writeFileSync).toHaveBeenCalledTimes(1); // Check if write happened once
  });

  // it('should handle errors gracefully when OpenAPI spec is invalid', async () => {
  //   // Mock an invalid OpenAPI spec (e.g., malformed JSON)
  //   vi.spyOn(fs, 'readFileSync').mockReturnValue('invalid spec');

  //   try {
  //     await generate({
  //       input: './path/to/invalid/openapi.yaml',
  //       output: 'output/path',
  //     });
  //   } catch (error) {
  //     // Assert that an error is thrown as expected
  //     expect(error).toBeDefined();
  //   }
  // });
});
